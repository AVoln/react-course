import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { IStateScheme } from "../config/StateScheme";
import { DeepPartial } from "@reduxjs/toolkit";

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateScheme>;
}

export const StoreProvider = ({
  children,
  initialState,
}: IStoreProviderProps) => {
  const store = createReduxStore(initialState as IStateScheme);

  return <Provider store={store}>{children}</Provider>;
};
