import { type FC, type PropsWithChildren, useState } from "react";
import { ThemeContext } from "../lib/themeContext";
import { type Theme } from "../lib/types";
import { getDefaultTheme } from "../lib/utils";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(getDefaultTheme());

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
