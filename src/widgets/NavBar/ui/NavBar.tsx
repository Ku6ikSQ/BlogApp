import { type FC } from "react";
import { classNames } from "shared/libs/classNames";
import { AppLink } from "shared/ui/AppLink";
import cls from "./NavBar.module.scss";
import { useTranslation } from "react-i18next";

export const NavBar: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls["NavBar"])}>
            <div className="logo">
                <h4>{"BlogApp"}</h4>
            </div>

            <div className={cls["Links"]}>
                <AppLink className={cls.contrast} to="/">
                    {t("home")}
                </AppLink>
                <AppLink className={cls.contrast} to="/about">
                    {t("about")}
                </AppLink>
            </div>
        </div>
    );
};
