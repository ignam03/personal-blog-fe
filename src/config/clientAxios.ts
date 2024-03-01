import axios from "axios";

const API = {
  prod: "http://3.133.143.241/api",
  dev: "http://localhost:3000/api",
};

export const clientAxios = axios.create({
  baseURL: API.dev,
  withCredentials: true
})