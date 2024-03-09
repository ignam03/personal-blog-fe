import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchMyProfileRequest } from "../../api/user";

const user = async () => {
  const res = await fetchMyProfileRequest();
  return res;
};
const userResult = await user();

export interface UserState {
  id: number;
  userName: string;
  email: string;
  firstName?: string;
  lastName?: string;
  biography?: string;
  role?: string;
  gender?: string;
  isActive?: string;
  profileImage: string;
  file: File[];
}

const initialState = {
  id: userResult.id,
  userName: userResult.userName,
  email: userResult.email,
  firstName: userResult.firstName,
  lastName: "",
  biography: "",
  role: "",
  gender: "",
  isActive: "",
  profileImage: userResult.profileImage,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUser: (state, action: PayloadAction<UserState>) => {
      const { firstName } = action.payload;
      if (firstName !== undefined) {
        state.firstName = firstName;
      }
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = Number(action.payload.id);
      state.userName = action.payload.userName;
      state.profileImage = action.payload.profileImage;
      // ... update other properties similarly
    },
  },
});

export const { fetchUser, setUser } = userSlice.actions;
export default userSlice.reducer;
