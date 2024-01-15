const { postUserLogic } = require("../logic/users");
const { loginUserLogic } = require("../logic/sign-in.js");
const catchedAsync = require("../utils/catchedAsync");
const ErrorHandler = require("../handlers/users");

// LOGIN USER
const loginUser = catchedAsync(async (req, res) => {
  const { email, password } = req.body;

  const loginResult = await loginUserLogic(email, password);

  if (loginResult.error === "Usuario baneado") {
    return res.status(403).json({ error: loginResult.error });
  }

  if (loginResult.error) {
    return res.status(401).json({ error: loginResult.error });
  }

  res.status(200).json(loginResult);
});

// CREATE USER
const createUser = catchedAsync(async (req, res) => {
  try {
    let newUser = await postUserLogic(req.body);

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(201).json({ error: error.message });
  }
}, ErrorHandler.createUserErrorHandler);

module.exports = {
  createUser,
  loginUser,
};
