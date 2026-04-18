import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autofocus?: boolean;
  lazy?: boolean;
}

export const Input = memo(
  ({
    className = "",
    type = "text",
    value,
    onChange,
    placeholder,
    autofocus,
  }: IInputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={classNames(cls.input, {}, [className])}>
        {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          autoFocus={autofocus}
        />
      </div>
    );
  },
);
