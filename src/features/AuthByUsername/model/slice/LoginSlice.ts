import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginScheme } from "../types/LoginScheme";

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
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
