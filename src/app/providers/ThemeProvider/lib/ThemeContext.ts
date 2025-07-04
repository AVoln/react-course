import { createContext } from "react";

export interface IThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
