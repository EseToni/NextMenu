const mongoose = require("mongoose");

const config = {
  timestamps: false, // createAt, updateAt
  versionKey: false,
};

interface Menus {
  id: number;
  nameMenu: string;
  description: string;
  available: boolean;
  avaliableDays: Array<String>;
  dishes: number;
  categories: Array<Categories>;
}

interface Categories {
  nameCategory: string;
  description: string;
  dishes: Array<Dishes>;
}

interface Dishes {
  nameDish: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
  labels: ["vegetarian", "vegan", "gluten-free", "lactose-free"];
  allergens: ["gluten", "lactose", "egg", "fish", "shellfish", "peanuts"];
}

const schema = {
  _id: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  nameRestaurant: {
    type: String,
    required: true,
  },
  associates: {
    type: Array<String>,
    required: false,
  },
  menus: {
    type: Array<Menus>,
    required: true,
  },
};

const MenuScheme = new mongoose.Schema(schema, config);

MenuScheme.static("findAllData", function () {
  return this.find({});
});
MenuScheme.static("findOneData", function (_id) {
  return this.findById(_id);
});
MenuScheme.static("updateData", function (_id, body) {
  return this.findOneAndUpdate({ _id }, body);
});
MenuScheme.static("removeData", function (_id) {
  return this.deleteOne({ _id });
});

const MenusModel = mongoose.model("users", MenuScheme);

module.exports = MenusModel;
