import { configureStore } from "@reduxjs/toolkit";
import { IStateScheme } from "./StateScheme";
import { counterReducer } from "app/entities/Counter";

export function createReduxStore(initialState?: IStateScheme) {
  return configureStore<IStateScheme>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
