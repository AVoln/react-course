import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "features/AuthByUsername/model/slice/LoginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {}, [dispatch]);

  return (
    <div className={classNames(cls.loginform, {}, [className])}>
      <Input
        value={username}
        placeholder={t("Имя")}
        autofocus
        onChange={onChangeUsername}
      />
      <Input
        value={password}
        placeholder={t("Пароль")}
        onChange={onChangePassword}
      />
      <Button onClick={onLoginClick}>{t("Войти")}</Button>
    </div>
  );
});
