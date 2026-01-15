import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: "Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки "
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: "Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки "
  },  
    decorators: [ThemeDecorator(Theme.DARK)],
};
