import { ICounterScheme } from "app/entities/Counter/model/types/counterScheme";
import { IUserScheme } from "app/entities/User";

export interface IStateScheme {
  counter: ICounterScheme;
  user: IUserScheme;
}
