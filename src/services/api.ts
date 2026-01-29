import axios from "axios";

export const api = axios.create({
  baseURL: "/data",
});

export default api;
