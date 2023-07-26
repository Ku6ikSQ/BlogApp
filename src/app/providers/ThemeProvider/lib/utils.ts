import { type Theme } from "./types";

export const THEME_LS_KEY = "theme";

export const getDefaultTheme = (): Theme => {
    const lsTheme: Theme = localStorage.getItem(THEME_LS_KEY) as Theme;

    return lsTheme || "light";
};

export const saveTheme = (theme: Theme): void => {
    localStorage.setItem(THEME_LS_KEY, theme);
};
