import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import { ICounterScheme } from "../../types/counterScheme";

export const getCounterValue = createSelector(
  getCounter,
  (counter: ICounterScheme) => counter.value,
);
