import { ICounterScheme } from "../types/counterScheme";
import { counterActions, counterReducer } from "./counterSlice";

describe(`counterSlice.test`, () => {
  test("decrement", () => {
    const state: ICounterScheme = { value: 10 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test("increment", () => {
    const state: ICounterScheme = { value: 10 };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test("should work if empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
