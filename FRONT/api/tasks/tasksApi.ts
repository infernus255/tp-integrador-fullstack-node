import { Task } from "../../interfaces";
import { apiConfig } from "..";

const baseRoute = "tasks";
const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBlcGVBQkNEIiwiaWF0IjoxNjYxMzE3MjM1LCJleHAiOjE2NjEzMjA4MzV9.FxDCH_Wn28w4-c0_txw2f2TaUW2_gh4fUR3agennOIM";
const config = {
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
};

export const getTaskById = async (id: string): Promise<Task | null> => {
  // Fetch data from external API
  const { data } = await apiConfig.get<Task>(`${baseRoute}/${id}`, config);

  return JSON.parse(JSON.stringify(data));
};
