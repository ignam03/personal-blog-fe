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
