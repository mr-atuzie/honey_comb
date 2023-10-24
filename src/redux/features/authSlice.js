import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET_AUTH(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
      if (action.payload.message === "invalid signature") {
        state.isLoggedIn = false;
      }
    },
    SET_USER(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { SET_LOGIN, SET_USER, RESET_AUTH } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
