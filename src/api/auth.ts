import { clientAxios } from "../config/clientAxios";
import { LoginType } from "../types/loginType";
import { RegisterType } from "../types/registerType";

// const API = {
//   prod: "http://3.133.143.241/api",
//   dev: "http://localhost:3000/api",
// };

export const registerRequest = (user: RegisterType) =>
  clientAxios.post(`/auth/signup`, user);
export const loginRequest = (user: LoginType) =>
  clientAxios.post(`/auth/login`, user);
export const logoutRequest = (config: { headers: { Authorization: string } }) =>
  clientAxios.get(`/auth/logout`, config);
export const meRequest = (config: { headers: { Authorization: string } }) =>
  clientAxios.get(`/users/my-profile`, config);
export const logout = () => clientAxios.post(`/auth/logout`);
export const ConfirmAccountRequest = async (token?: string) => {
  return clientAxios.get(`/auth/confirm-account/${token}`);
};
export const forgotPasswordRequest = async (email: string) => {
  return clientAxios.post(`/users/forgot-password`, email);
};
