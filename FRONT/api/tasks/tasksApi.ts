import { Task } from "../../interfaces";
import { apiConfig } from "..";

const baseRoute = "tasks";
const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBlcGVBQkNEIiwiaWF0IjoxNjYxMzgxMDI1LCJleHAiOjE2NjEzODQ2MjV9.QgSf8l2_ItwDCpvinj90A4YkO37NcoB04Up7wX1Rhn4";
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
