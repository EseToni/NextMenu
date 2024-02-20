import { API_URL_MENU, API_URL_MENU_ALL } from "@/common/API_URL";

class MenuApi {
  static async getAllRestaurants(ownerId: string) {
    const response = await fetch(`${API_URL_MENU_ALL}${ownerId}`);
    return await response.json();
  }
  static async getRestaurant(idRestaurant: string) {
    const response = await fetch(`${API_URL_MENU}${idRestaurant}`);
    return await response.json();
  }
  static async createRestaurant(nameRestaurant : string, ownerId: string){
    const response = await fetch(API_URL_MENU, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ownerId, nameRestaurant }),
    });
    return await response.json();
  }
  static async createMenu(nameMenu: string, ownerId: string, idRestaurant : string) {
    const response = await fetch(`${API_URL_MENU}${idRestaurant}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ownerId, nameMenu }),
    });
    return await response.json();
  }
}

export default MenuApi;
