import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onTogleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onTogleModal}
      >
        {t("Войти")}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onTogleModal}>
        Текст модалки Текст модалки Текст модалки Текст модалки Текст модалки
      </Modal>
    </div>
  );
};
