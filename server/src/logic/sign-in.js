import UsersModel from "../models/mongoose/users.js";
import jwt from "jsonwebtoken";

const loginUserLogic = async (email, password) => {
  try {
    const user = await UsersModel.findOne({ email });

    if (!user) {
      return { error: "Usuario no encontrado" };
    }

    if (user.deletedAt) {
      return { error: "Usuario baneado", userId: user.id };
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return { error: "Contraseña incorrecta" };
    }

    const token = jwt.sign({ userId: user.id }, "tu_secreto_secreto", {
      expiresIn: "24h",
    });

    return {
      token,
      id: user.id,
      name: user.name,
      email: user.email,
      success: "Inicio de sesión exitoso",
    };
  } catch (error) {
    return { error: "Error en el servidor al procesar la solicitud" };
  }
};

export { loginUserLogic };
