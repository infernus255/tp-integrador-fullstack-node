import axios from "axios";

export const apiConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
