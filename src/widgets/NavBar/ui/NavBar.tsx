import { type FC } from "react";
import { classNames } from "shared/libs/classNames";
import { AppLink } from "shared/ui/AppLink";
import cls from "./NavBar.module.scss";
import { useTranslation } from "react-i18next";
import { Typography } from "shared/ui/Typography";
import { paths } from "shared/route";

export const NavBar: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls["NavBar"])}>
            <div className="logo">
                <Typography contrast role="h4">
                    {"BlogApp"}
                </Typography>
            </div>

            <div className={cls["Links"]}>
                <AppLink className={cls.contrast} to={paths.home}>
                    {t("home")}
                </AppLink>
                <AppLink className={cls.contrast} to={paths.about}>
                    {t("about")}
                </AppLink>
            </div>
        </div>
    );
};
