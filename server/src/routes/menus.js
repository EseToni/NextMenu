import express from "express";
import Controller from "../controllers/menus.js";

const router = express.Router();

router.get("/", (_, res) => {
  res.json({
    message: "Welcome to the user API",
  });
});

router.post("/", Controller.createRestaurant);

router.post("/:id", Controller.createMenu);

router.post("/category/:id", Controller.createCategory);

router.post("/dish/:id", Controller.createDish);

export default router;
