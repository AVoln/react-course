import { configureStore } from "@reduxjs/toolkit";
import { IStateScheme } from "./StateScheme";

export function createReduxStore(initialState?: IStateScheme) {
  return configureStore<IStateScheme>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
