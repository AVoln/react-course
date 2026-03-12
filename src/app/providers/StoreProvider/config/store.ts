import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStateScheme } from "./StateScheme";
import { counterReducer } from "app/entities/Counter";
import { userReducer } from "app/entities/User";

export function createReduxStore(initialState?: IStateScheme) {
  const rootReducers: ReducersMapObject<IStateScheme> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<IStateScheme>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
