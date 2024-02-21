import express from "express";
import Controller from "../controllers/menus.js";

const router = express.Router();

router.get("/", (_, res) => {
  res.json({
    message: "Welcome to the user API",
  });
});

router.get("/:id", Controller.getRestaurant);

router.get("/all/:ownerId", Controller.getAllRestaurants);

router.get("/:idRestaurant/:idMenu", Controller.getMenu);

router.post("/", Controller.createRestaurant);

router.post("/:id", Controller.createMenu);

router.post("/category/:id", Controller.createCategory);

router.post("/dish/:id", Controller.createDish);

export default router;
