export interface MenusTypes {
  _id?: string;
  nameMenu: string;
  description?: string;
  available?: boolean;
  avaliableDays?: Array<string>;
  dishes?: number;
  categories?: Array<Categories>;
}

export interface Categories {
  _id?: string;
  nameCategory: string;
  description?: string;
  dishes?: Array<Dishes>;
}

export interface Dishes {
  _id?: string;
  nameDish: string;
  description?: string;
  price: number;
  available?: boolean;
  image?: string;
  labels?: ["vegetarian", "vegan", "gluten-free", "lactose-free"];
  allergens?: ["gluten", "lactose", "egg", "fish", "shellfish", "peanuts"];
}

export interface MenusModelTypes {
  _id?: string;
  owner: string;
  nameRestaurant: string;
  imageRestaurant?: string;
  associates?: Array<string>;
  menus?: Array<MenusTypes>;
}
