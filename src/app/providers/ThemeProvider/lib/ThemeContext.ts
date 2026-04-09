import { createContext } from "react";

export interface IThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export enum Theme {
  LIGHT = "app-light-theme",
  DARK = "app-dark-theme",
}

export const ThemeContext = createContext<IThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = "theme";
