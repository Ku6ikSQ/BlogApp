import { FC } from "react";
import { classNames } from "shared/classNames";
import { AppLink } from "shared/ui/AppLink";
import cls from "./NavBar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = (props) => {
    const {} = props;

    return (
        <div className={classNames(cls["NavBar"])}>
            <div className="logo"></div>

            <div className={cls["Links"]}>
                <AppLink to="/">Home</AppLink>
                <AppLink to="/about">About</AppLink>
            </div>
        </div>
    );
};
