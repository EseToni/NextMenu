export interface IMenu {
  _id: string;
  nameMenu: string;
  available: boolean;
  availableDays: string[];
  dishes: number;
  description: string;
  categories: ICategory[];
}
export interface ICategory {
  _id: string;
  nameCategory: string;
  dishes: IDish[];
}
export interface IDish {
  _id: string;
  nameDish: string;
  price: number;
  description: string;
  image?: string;
  available: boolean;
  allergens?: string[];
  labels?: string[];
}
