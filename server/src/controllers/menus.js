import Logic from "../logic/menu.ts";

import catchedAsync from "../utils/catchedAsync.js";

import validateId from "../utils/ft_check_id.js";

class Controller {
  static getRestaurant = catchedAsync(async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw new Error("idRestaurant is required");
    }

    const restaurant = await Logic.getRestaurant(id);

    res.status(200).json(restaurant);
  });

  static getAllRestaurants = catchedAsync(async (req, res) => {
    const { ownerId } = req.params;

    if (!ownerId) {
      throw new Error("ownerId is required");
    }

    const restaurants = await Logic.getAllRestaurants(ownerId);

    res.status(200).json(restaurants);
  });

  static getMenu = catchedAsync(async (req, res) => {
    const { idRestaurant, idMenu } = req.params;

    if (!idRestaurant) {
      throw new Error("idRestaurant is required");
    } else if (!idMenu) {
      throw new Error("idMenu is required");
    }

    const menu = await Logic.getMenu(idRestaurant, idMenu);

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
      const { idMenu, nameCategory, description } = req.body;

      const { id } = req.params;

      if (!id) {
        throw new Error("_id restaurant is required");
      } else if (!idMenu || !nameCategory) {
        throw new Error("idMenu or nameCategory is required");
      } else if (!validateId(idMenu)) {
        throw new Error("idMenu is not valid");
      }

      const newCategory = await Logic.createCategory(id, idMenu, {
        nameCategory,
        description,
      });

      if (!newCategory) {
        throw new Error("Category not created");
      }

      return res.status(201).json(newCategory);
    } catch (error) {
      console.log(error);
    }
  });

  static createDish = catchedAsync(async (req, res) => {
    const {
      idMenu,
      idCategory,
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
    } else if (!idMenu || !idCategory || !nameDish || !price) {
      throw new Error(
        "idMenu or idCategory or nameDish or price is required"
      );
    }

    const newDish = await Logic.createDish(id, idMenu, idCategory, {
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
