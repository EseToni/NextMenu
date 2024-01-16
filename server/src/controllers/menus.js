import Logic from "../logic/menu.ts";

import catchedAsync from "../utils/catchedAsync.js";

class Controller {
  static createRestaurant = catchedAsync(async (req, res) => {
    const { owner, imageRestaurant, nameRestaurant } = req.body;

    if (!owner || !nameRestaurant) {
      throw new Error("owner and nameRestaurant is required");
    }

    const newRestaurant = await Logic.createRestaurant({
      owner,
      imageRestaurant,
      nameRestaurant,
    });

    res.status(201).json(newRestaurant);
  });

  static createMenu = catchedAsync(async (req, res) => {
    const { nameMenu, description, avaliableDays } = req.body;

    const { id } = req.params;

    if (!id) {
      throw new Error("id is required");
    } else if (!nameMenu) {
      throw new Error("nameMenu is required");
    }

    const newMenu = await Logic.createMenu(id, {
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
