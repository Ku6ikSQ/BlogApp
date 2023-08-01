import { type FC } from "react";
import { classNames } from "shared/libs/classNames";
import { AppLink } from "shared/ui/AppLink";
import cls from "./NavBar.module.scss";
import { useTranslation } from "react-i18next";

export const NavBar: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls["NavBar"])}>
            <div className="logo"></div>

            <div className={cls["Links"]}>
                <AppLink to="/">{t("home")}</AppLink>
                <AppLink to="/about">{t("about")}</AppLink>
            </div>
        </div>
    );
};
