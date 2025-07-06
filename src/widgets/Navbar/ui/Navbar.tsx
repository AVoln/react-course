import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={"/"} theme={AppLinkTheme.PRIMARY}>
          Главная
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.INVERTED}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
