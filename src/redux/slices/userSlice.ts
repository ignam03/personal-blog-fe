import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id: number;
  username?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  biography?: string;
  role?: string;
  gender?: string;
  isActive?: string;
}

const initialState = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  biography: "",
  role: "",
  gender: "",
  isActive: "",
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
      return action.payload;
    },
  },
});

export const { fetchUser, setUser } = userSlice.actions;
export default userSlice.reducer;
