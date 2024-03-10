import { clientAxios } from "../config/clientAxios";
import { PasswordType } from "../types/PasswordType";

export const fetchMyProfileRequest = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return;
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await clientAxios.get(`/users/my-profile`, config);
  const res = await clientAxios.get(`/users/my-profile`, config);
  return res.data;
};
export const updateMyProfileRequest = async (data: FormData) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await clientAxios.patch(`/users/my-profile`, data, config);
  return res;
};

export const updateUserPasswordRequest = async (body: PasswordType) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
  const res = await clientAxios.put(`/users/change-password`, body, config);
  if (res.status === 200) {
    localStorage.removeItem("token");
  }
  return res;
};
