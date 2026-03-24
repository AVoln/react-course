import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: "Title title title",
    text: "Текст компонента компонента",
  },
};

export const Error: Story = {
  args: {
    title: "Title title title",
    text: "Текст компонента компонента",
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Title title title",
  },
};

export const onlyText: Story = {
  args: {
    text: "Текст компонента компонента",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Title title title",
    text: "Текст компонента компонента",
  },  
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
  args: {
    title: "Title title title",
  },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
  args: {
    text: "Текст компонента компонента",
  },
    decorators: [ThemeDecorator(Theme.DARK)],
};

