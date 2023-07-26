import { useContext } from "react";
import { type IUseTheme } from "./types";
import { ThemeContext } from "./themeContext";
import { saveTheme } from "./utils";

export const useTheme = (): IUseTheme => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const newTheme = theme === "light" ? "dark" : "light";

        saveTheme(newTheme);
        setTheme(newTheme);
    };

    return { theme, toggleTheme };
};
