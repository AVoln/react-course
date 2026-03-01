import { IStateScheme } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";
import { DeepPartial } from "@reduxjs/toolkit";

describe(`getCounterValue.test`, () => {
  test("", () => {
    const state: DeepPartial<IStateScheme> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as IStateScheme)).toEqual(10);
  });
});
