import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
