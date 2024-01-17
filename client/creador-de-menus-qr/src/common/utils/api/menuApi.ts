import { API_URL_MENU } from "@/common/API_URL";

class MenuApi {
  static async createMenu(nameMenu: string) {
    const response = await fetch(API_URL_MENU, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nameMenu }),
    });
    return await response.json();
  }
}

export default MenuApi;
