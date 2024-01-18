import { API_URL_LOGIN, API_URL_REGISTER } from "@/common/API_URL";

class UserApi {
  static async registerUser(user: PropsRegister) {
    
    const response = await fetch(API_URL_REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data: { success?: string; error?: string } = await response.json();

    if (data.success) {
      return data;
    } else if (data.error) {
      throw new Error(data.error);
    }
  }
}

export default UserApi;

type PropsRegister = {
  //   email: `${string}@${string}.${string}`;
  email: string;
  password: string;
  name: string;
};
