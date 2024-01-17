/// <reference types="node" />

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/";

export const API_URL_MENU = API_URL + "menu/";

export const API_URL_MENU_CATEGORY = API_URL_MENU + "category/";

export const API_URL_MENU_DISH = API_URL_MENU + "dish/";
