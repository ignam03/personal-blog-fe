import { clientAxios } from "../config/clientAxios";
import { LoginType } from "../types/loginType";
import { RegisterType } from "../types/registerType";

const API = {
  prod: "http://3.133.143.241/api",
  dev: "http://localhost:3000/api",
};

export const registerRequest = (user: RegisterType) =>
  clientAxios.post(`${API.dev}/auth/signup`, user);
export const loginRequest = (user: LoginType) =>
  clientAxios.post(`${API.dev}/auth/login`, user);
export const logoutRequest = () => clientAxios.post(`${API.dev}/auth/logout`);
export const meRequest = (config: { headers: { Authorization: string } }) =>
  clientAxios.get(`${API.dev}/users/my-profile`, config);
export const logout = () => clientAxios.post(`${API.dev}/auth/logout`);
