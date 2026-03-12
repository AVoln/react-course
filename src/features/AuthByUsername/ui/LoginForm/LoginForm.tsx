import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginform, {}, [className])}>
      <Input placeholder={t("Имя")} autofocus />
      <Input placeholder={t("Пароль")} />
      <Button>{t("Войти")}</Button>
    </div>
  );
};
