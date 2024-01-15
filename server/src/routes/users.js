const express = require("express");
const router = express.Router();
const controllers = require("../controllers/users");

// route => /breeds/...

router.get("/", (_, res) => {
  res.json({
    message: "Welcome to the user API",
  });
});

router.post("/register", controllers.createUser);

router.post("/login", controllers.loginUser);

module.exports = router;
