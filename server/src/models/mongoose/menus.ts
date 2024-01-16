import mongoose from "mongoose";

import { MenusModelTypes, MenusTypes } from "../../types/menuTypes.ts";

const config = {
  timestamps: false, // createAt, updateAt
  versionKey: false,
};

const scheme = {
  owner: {
    type: String,
    required: true,
  },
  nameRestaurant: {
    type: String,
    required: true,
  },
  imageRestaurant: {
    type: String,
    required: false,
  },
  associates: {
    type: [String],
    required: false,
  },
  menus: {
    type: [
      {
        nameMenu: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: false,
        },
        available: {
          type: Boolean,
          required: false,
          default: true,
        },
        avaliableDays: {
          type: [String],
          required: false,
          default: [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ],
        },
        dishes: {
          type: Number,
          required: false,
          default: 0,
        },
        categories: {
          type: [
            {
              nameCategory: {
                type: String,
                required: true,
                unique: true,
              },
              description: {
                type: String,
                required: false,
              },
              dishes: {
                type: [
                  {
                    nameDish: {
                      type: String,
                      required: true,
                      unique: true,
                    },
                    description: {
                      type: String,
                      required: false,
                    },
                    price: {
                      type: Number,
                      required: true,
                    },
                    available: {
                      type: Boolean,
                      required: true,
                    },
                    image: {
                      type: String,
                      required: false,
                    },
                    labels: {
                      type: [String],
                      required: false,
                    },
                    allergens: {
                      type: [String],
                      required: false,
                    },
                  },
                ],
                required: false,
              },
            },
          ],
          required: false,
        },
      },
    ], // Use MenusTypes as a value
    required: false,
  },
};



const MenuScheme = new mongoose.Schema<MenusModelTypes>(
  scheme,
  config
);

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

const MenusModel = mongoose.model("menus", MenuScheme);


export default MenusModel;
