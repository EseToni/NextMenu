import mongoose from "mongoose";
import bcrypt from "bcrypt";

const config = {
  timestamps: true, // createAt, updateAt
  versionKey: false,
};
const schema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
};

const UserScheme = new mongoose.Schema(schema, config);

// add static methods (functions) to model
UserScheme.static("findAllData", function () {
  return this.find({});
});
UserScheme.static("findOneData", function (_id) {
  return this.findById(_id);
});
UserScheme.static("updateData", function (_id, body) {
  return this.findOneAndUpdate({ _id }, body);
});
UserScheme.static("removeData", function (_id) {
  return this.deleteOne({ _id });
});
// ItemsScheme.static("findOne", ({ email }) => {
//   return this.findOne({ email });
// });

UserScheme.static("createUser", async function (body) {
  const { name, email, password } = body;

  if (!name || !email || !password) {
    throw new Error("Name, email or password are required.");
  }
  const emailUser = await this.findOne({ email }).exec();

  if (emailUser) {
    throw new Error("Email already exists.");
  }

  const newUser = this.create(body);

  return newUser;
});

const UsersModel = mongoose.model("users", UserScheme);

UsersModel.prototype.comparePassword = async function (password) {
  const pass = await bcrypt.compare(password, this.password);
  return pass;
};

export default UsersModel;
