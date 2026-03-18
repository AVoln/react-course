import { ICounterScheme } from "app/entities/Counter/model/types/counterScheme";
import { IUserScheme } from "app/entities/User";
import { ILoginScheme } from "features/AuthByUsername";

export interface IStateScheme {
  counter: ICounterScheme;
  user: IUserScheme;
  loginForm: ILoginScheme;
}
