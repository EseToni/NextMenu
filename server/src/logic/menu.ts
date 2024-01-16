import MenusModel from "../models/mongoose/menus.ts";

import { MenusTypes, Categories, Dishes } from "../types/menuTypes.ts";

class Logic {
  static createRestaurant = async ({
    owner,
    imageRestaurant,
    nameRestaurant,
  }: {
    owner: string;
    imageRestaurant?: string;
    nameRestaurant: string;
  }) => {
    const restaurant = await MenusModel.create({
      owner,
      imageRestaurant,
      nameRestaurant,
    });
    return restaurant;
  };

  static createMenu = async (_id: string, body: MenusTypes) => {
    try {
      const restaurant = await MenusModel.findByIdAndUpdate(
        _id,
        {
          $push: {
            menus: body,
          },
        },
        { new: true }
      );
      return restaurant;
    } catch (error) {
      throw new Error(String(error));
    }
  };

  static createCategory = async (
    _id: string,
    nameMenu: string,
    body: Categories
  ) => {
    const restaurant = await MenusModel.findOneAndUpdate(
      {
        _id,
        "menus.nameMenu": nameMenu,
      },
      {
        $push: {
          "menus.$.categories": body,
        },
      },
      { new: true }
    );
    return restaurant;
  };

static createDish = async (
    _id: string,
    nameMenu: string,
    nameCategory: string,
    body: Dishes
) => {
    const restaurant = await MenusModel.findOneAndUpdate(
        {
            _id,
            "menus.nameMenu": nameMenu,
        },
        {
            $push: {
                "menus.$[menu].categories.$[category].dishes": body,
            },
        },
        {
            new: true,
            arrayFilters: [
                { "menu.nameMenu": nameMenu },
                { "category.nameCategory": nameCategory },
            ],
        }
    );
    return restaurant;
};
}

export default Logic;
