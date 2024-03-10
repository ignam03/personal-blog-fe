import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  id: 0,
  userName: "",
  email: "",
  firstName: "",
  lastName: "",
  biography: "",
  role: "",
  gender: "",
  isActive: "",
  profileImage: "",
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
    setProfileUser: (state, action: PayloadAction<UserState>) => {
      state.id = Number(action.payload.id);
      state.userName = action.payload.userName;
      state.profileImage = action.payload.profileImage;
      // ... update other properties similarly
    },
  },
});

export const { fetchUser, setProfileUser } = userSlice.actions;
export default userSlice.reducer;
