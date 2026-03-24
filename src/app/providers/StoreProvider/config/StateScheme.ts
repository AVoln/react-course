import { ICounterScheme } from "entities/Counter/model/types/counterScheme";
import { IUserScheme } from "entities/User";
import { ILoginScheme } from "features/AuthByUsername";

export interface IStateScheme {
  counter: ICounterScheme;
  user: IUserScheme;
  loginForm: ILoginScheme;
}
