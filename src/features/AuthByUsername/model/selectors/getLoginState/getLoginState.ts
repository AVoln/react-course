import { IStateScheme } from "app/providers/StoreProvider";

export const getLoginState = (state: IStateScheme) => {
  return state?.loginForm;
};
