import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../store";

export const UserEmptyState: UserInfo = {
  user: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: UserEmptyState,
  reducers: {
    createUser: (_, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return UserEmptyState;
    },
  },
});

export const { createUser, modifyUser, resetUser} = userSlice.actions