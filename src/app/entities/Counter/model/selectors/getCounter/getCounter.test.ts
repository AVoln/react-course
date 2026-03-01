import { DeepPartial } from "@reduxjs/toolkit";
import { getCounter } from "./getCounter";
import { IStateScheme } from "app/providers/StoreProvider";

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: DeepPartial<IStateScheme> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as IStateScheme)).toEqual({ value: 10 });
  });
});
