import { IStateScheme } from "app/providers/StoreProvider";

export const getUserAuthData = (state: IStateScheme) => {
  return state.user.authData;
};
