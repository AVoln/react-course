import { Counter } from "entities/Counter";
import { BugButton } from "app/providers/ErrorBoundary";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />
      {t("Главная страница")}
      <Counter />
    </div>
  );
};

export default MainPage;
