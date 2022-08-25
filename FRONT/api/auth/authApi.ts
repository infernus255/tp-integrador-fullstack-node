import { Task } from "../../interfaces";
import { apiConfig } from "../";

const baseRoute = "auth";
const config = {
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
};

export const signUp = async (username: string, password: string) => {
  // Fetch data from external API
  const { data } = await apiConfig.post(
    `${baseRoute}/signup`,
    { username, password },
    config
  );
};

export const signIn = async (
  username: string,
  password: string
): Promise<string> => {
  // Fetch data from external API
  const { data } = await apiConfig.post<Task>(
    `${baseRoute}/signin`,
    { username, password },
    config
  );

  return JSON.parse(JSON.stringify(data));
};
