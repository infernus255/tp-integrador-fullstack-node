import { Task } from "../../interfaces";
import { apiConfig } from "../";

const baseRoute = "auth";
const config = {
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
};

export const signup = async (
  username: string,
  password: string
): Promise<Task | null> => {
  // Fetch data from external API
  const { data } = await apiConfig.post<Task>(
    `${baseRoute}/signup`,
    { username, password },
    config
  );

  return JSON.parse(JSON.stringify(data));
};
