import { type FC } from "react";
import { classNames } from "shared/libs/classNames";
import { Typography } from "shared/ui/Typography";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import cls from "./AppBar.module.scss";

export const AppBar: FC = () => {
    return (
        <div className={classNames(cls["AppBar"])}>
            <Typography contrast role="h4">
                {"BlogApp"}
            </Typography>

            <div className={cls.switchers}>
                <LangSwitcher className={cls.langSwitcher} />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
