import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";
import { useTranslation } from "react-i18next";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface ITextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
}

export const Text = ({
  className,
  text,
  title,
  theme = TextTheme.PRIMARY,
}: ITextProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.text, { [cls[theme]]: true }, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
