import { IStateScheme } from "app/providers/StoreProvider/config/StateScheme";

export const getCounter = (state: IStateScheme) => {
  return state.counter;
};
