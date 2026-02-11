import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

interface IStoreProviderProps {
  children?: ReactNode;
}

const store = createReduxStore();

export const StoreProvider = ({ children }: IStoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
