import { Task } from "../../interfaces";
import { apiConfig } from "../";
import { AuthToken } from "../../interfaces/authToken";
import Cookies from "js-cookie";

const baseRoute = "auth";

export const signUp = async (
  username: string,
  password: string
): Promise<boolean> => {
  // Fetch data from external API
  const { status, statusText } = await apiConfig.post(`${baseRoute}/signup`, {
    username,
    password,
  });
  if (status == 201) return true;
  return false;
};

export const signIn = async (
  username: string,
  password: string
): Promise<boolean> => {
  // Fetch data from external API
  const { data, status } = await apiConfig.post<AuthToken>(
    `${baseRoute}/signin`,
    {
      username,
      password,
    }
  );
  if (status == 201) {
    Cookies.set("access_token", data.accessToken);
    return true;
  }
  return false;
};
