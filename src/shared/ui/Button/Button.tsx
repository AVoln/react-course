import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size-m",
  L = "size-l",
  XL = "size-xl",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme,
  square,
  size,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls[size]]: true,
    [cls.square]: square,
  };

  return (
    <button
      className={classNames(cls.button, mods, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
