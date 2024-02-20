/// <reference types="node" />

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/";

const API_URL_USERS = API_URL + "users/";

export const API_URL_REGISTER = API_URL_USERS + "register/";

export const API_URL_LOGIN = API_URL_USERS + "login/";

export const API_URL_MENU = API_URL + "menus/";

export const API_URL_MENU_ALL = API_URL_MENU + "all/";

export const API_URL_MENU_CATEGORY = API_URL_MENU + "category/";

export const API_URL_MENU_DISH = API_URL_MENU + "dish/";
