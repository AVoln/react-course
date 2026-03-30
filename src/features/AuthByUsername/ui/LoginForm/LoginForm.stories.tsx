import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import { LoginForm } from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
    decorators: [StoreDecorator({
      loginForm: {username: "123", password: "123"}
    })],
};

export const WithError: Story = {
  args: {},
    decorators: [StoreDecorator({
      loginForm: {username: "123", password: "123", error: "error text"}
    })],
};

export const Loading: Story = {
  args: {},
    decorators: [StoreDecorator({
      loginForm: {isLoading: true}
    })],
};
