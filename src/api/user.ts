import { clientAxios } from "../config/clientAxios";

export const fetchMyProfileRequest = async () => {
  const token = localStorage.getItem("token");
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
export const updateMyProfileRequest = async (data: any) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await clientAxios.patch(`/users/my-profile`, data, config);
  console.log(res);
  return res;
};
