import { FC } from "react";
import { classNames } from "shared/classNames";
import { Button } from "shared/ui/Button";
import { useTheme } from "app/providers/ThemeProvider";
import SwitcherIconLight from "app/assets/icons/theme-light.svg";
import SwitcherIconDark from "app/assets/icons/theme-dark.svg";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls["ThemeSwitcher"], [className])}
        >
            {theme === "light" ? <SwitcherIconDark /> : <SwitcherIconLight />}
        </Button>
    );
};
