import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "d669ac6b-62d9-41a3-87bd-b55e7713c52e",
  },
});
