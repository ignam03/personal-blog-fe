import axios from "axios";

const API = {
  prod: import.meta.env.VITE_BACKEND_API_URL_PROD,
  dev: import.meta.env.VITE_BACKEND_API_URL_DEV,
};

export const clientAxios = axios.create({
  baseURL: API.dev,
  withCredentials: true,
})