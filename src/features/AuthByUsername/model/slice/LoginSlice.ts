import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginScheme } from "../types/LoginScheme";
import { loginByUsername } from "features/AuthByUsername/model/services/LoginByUsername/LoginByUsername";

const initialState: ILoginScheme = {
  isLoading: false,
  password: "",
  username: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
loginByUsername;
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
