import mongoose from "mongoose";

const name = "items";
const config = {
  timestamps: true, // createAt, updateAt
  versionKey: false,
};
const schema = {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
};

const ItemsScheme = new mongoose.Schema(schema, config);

// add static methods (functions) to model
ItemsScheme.static("findAllData", () => {
  return this.find({});
});
ItemsScheme.static("findOneData", (_id) => {
  return this.findById(_id);
});
ItemsScheme.static("updateData", (_id, body) => {
  return this.findOneAndUpdate({ _id }, body);
});
ItemsScheme.static("removeData", (_id) => {
  return this.deleteOne({ _id });
});

const ItemsModel = mongoose.model(name, ItemsScheme);

const exameple = new ItemsModel({
  name: "example",
  description: "example",
  price: "example",
  amount: 0,
});

exameple
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

export default ItemsModel;
