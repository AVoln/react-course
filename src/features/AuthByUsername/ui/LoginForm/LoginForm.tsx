import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/LoginByUsername/LoginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className = "" }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { username, password, isLoading, error } = useSelector(getLoginState);

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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.loginform, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && (
        <Text
          text={t("Неверный логин или пароль")}
          theme={TextTheme.ERROR}
        ></Text>
      )}
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
      <Button onClick={onLoginClick} disabled={isLoading}>
        {t("Войти")}{" "}
      </Button>
    </div>
  );
});
