import { DeepPartial } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { IStateScheme, StoreProvider } from "app/providers/StoreProvider";
import "app/styles/index.scss";

export const StoreDecorator = (store: DeepPartial<IStateScheme>) => {
  return (StoryComponent: StoryFn) => {
    return (
      <StoreProvider initialState={store}>
        <StoryComponent />
      </StoreProvider>
    );
  };
};
