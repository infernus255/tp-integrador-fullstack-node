import { Task } from "../../interfaces";
import { apiConfig } from "..";
import Cookies from "js-cookie";

const baseRoute = "tasks";
// const access_token = Cookies.get("access_token");

export const getTaskById = async (
  id: string,
  access_token: string
): Promise<Task | null> => {
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  // Fetch data from external API
  const { data } = await apiConfig.get<Task>(`${baseRoute}/${id}`, config);

  return JSON.parse(JSON.stringify(data));
};
