import UsersModel from "../models/mongoose/users.js";
import bcrypt from "bcrypt";

const postUserLogic = async (data) => {
  const originalPassword = data.password;
  const originalEmail = data.email;
  const originalName = data.name;

  if (originalPassword && originalEmail && originalName) {
    // Password hash
    let { password, ...newData } = data;
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    newData.password = hashPassword;

    const newUser = await UsersModel.createUser(newData);

    // return newUser;
    return {
      success: "User created successfully",
      data: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        lastName: newUser.lastName,
      },
    };
  } else throw Error("Data missing");
};

export { postUserLogic };
