const express = require("express");
const router = express.Router();

const { ItemsModel } = require("../models");

// route => /breeds/...

router.get("/", (_, res) => {
  res.json({
    message: "Welcome to the Breeds API",
  });
});

module.exports = router;
