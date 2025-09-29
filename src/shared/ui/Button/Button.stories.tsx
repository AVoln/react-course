import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonSize, ButtonTheme } from "./Button";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.CLEAR,
  },
};

export const Outlined: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlinedSizeL: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  },
};

export const OutlinedSizeXL: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  },
};

export const OutlinedDark: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BacgroundTheme: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BacgroundInvertedTheme: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
