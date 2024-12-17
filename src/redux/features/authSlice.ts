import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TUser } from "../../types/authtypes";

type TAuthState = {
  user: null | TUser;
  token: null | string;
};
const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const currentToken = (state: RootState) => state.auth.token;
export const currentUser = (state: RootState) => state.auth.user;