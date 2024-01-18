import Logic from "../logic/menu.ts";

import catchedAsync from "../utils/catchedAsync.js";

class Controller {
  static getRestaurant = catchedAsync(async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw new Error("id is required");
    }

    const restaurant = await Logic.getRestaurant(id);

    res.status(200).json(restaurant);
  });

  static getMenu = catchedAsync(async (req, res) => {
    const { id } = req.params;

    const { idMenu } = req.body;

    if (!id) {
      throw new Error("id is required");
    } else if (!idMenu) {
      throw new Error("idMenu is required");
    }

    const menu = await Logic.getMenu(id, idMenu);

    res.status(200).json(menu);
  });

  static createRestaurant = catchedAsync(async (req, res) => {
    const { ownerId, imageRestaurant, nameRestaurant } = req.body;

    if (!ownerId || !nameRestaurant) {
      throw new Error("ownerId and nameRestaurant is required");
    }

    const newRestaurant = await Logic.createRestaurant({
      ownerId,
      imageRestaurant,
      nameRestaurant,
    });

    res.status(201).json(newRestaurant);
  });

  static createMenu = catchedAsync(async (req, res) => {
    const { ownerId, nameMenu, description, avaliableDays } = req.body;

    const { id } = req.params;

    if (!id) {
      throw new Error("id is required");
    } else if (!nameMenu || !ownerId) {
      throw new Error("nameMenu or ownerId is required");
    }

    const newMenu = await Logic.createMenu(id, ownerId, {
      nameMenu,
      description,
      avaliableDays,
    });

    res.status(201).json(newMenu);
  });

  static createCategory = catchedAsync(async (req, res) => {
    try {
      const { nameMenu, nameCategory, description } = req.body;

      const { id } = req.params;

      if (!id) {
        throw new Error("_id restaurant is required");
      } else if (!nameMenu || !nameCategory) {
        throw new Error("nameMenu or nameCategory is required");
      }

      const newCategory = await Logic.createCategory(id, nameMenu, {
        nameCategory,
        description,
      });

      return res.status(201).json(newCategory);
    } catch (error) {
      console.log(error);
    }
  });

  static createDish = catchedAsync(async (req, res) => {
    const {
      nameMenu,
      nameCategory,
      nameDish,
      description,
      price,
      image,
      labels,
      allergens,
    } = req.body;

    const { id } = req.params;

    if (!id) {
      throw new Error("_id restaurant is required");
    } else if (!nameMenu || !nameCategory || !nameDish || !price) {
      throw new Error(
        "nameMenu or nameCategory or nameDish or price is required"
      );
    }

    const newDish = await Logic.createDish(id, nameMenu, nameCategory, {
      nameDish,
      description,
      price,
      image,
      labels,
      allergens,
    });

    res.status(201).json(newDish);
  });
}

export default Controller;
