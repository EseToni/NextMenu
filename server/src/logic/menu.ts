import MenusModel from "../models/mongoose/menus.ts";

import { MenusTypes, Categories, Dishes } from "../types/menuTypes.ts";

class Logic {
  static getRestaurant = async (_id: string) => {
    const restaurant = await MenusModel.findById(_id);

    const itemRestaurant = {
      idRestaurant: restaurant?._id,
      nameRestaurant: restaurant?.nameRestaurant,
      imageRestaurant: restaurant?.imageRestaurant,
      associates: restaurant?.associates,
      menus: restaurant?.menus?.map((menu) => {
        return {
          idMenu: menu._id,
          nameMenu: menu.nameMenu,
          available: menu.available,
          dishes: menu.dishes,
          avaliableDays: menu.avaliableDays,
        };
      }),
    };

    return itemRestaurant;
  };

  static getMenu = async (_id: string, idMenu?: string) => {
    const restaurant = await MenusModel.findById(_id);

    const itemMenu = restaurant?.menus?.find((menu) => menu._id == idMenu);

    console.log(itemMenu);

    return itemMenu;
  };

  static createRestaurant = async ({
    ownerId,
    imageRestaurant,
    nameRestaurant,
  }: {
    ownerId: string;
    imageRestaurant?: string;
    nameRestaurant: string;
  }) => {
    const restaurant = await MenusModel.create({
      ownerId,
      imageRestaurant,
      nameRestaurant,
    });
    return restaurant;
  };

  static createMenu = async (
    _id: string,
    ownerId: string,
    body: MenusTypes
  ) => {
    try {
      const verify = await MenusModel.findOne({
        _id,
        ownerId: ownerId,
      });

      if (!verify) {
        throw new Error("Not found");
      }

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
