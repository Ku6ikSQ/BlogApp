import { type FC, useState } from "react";
import { classNames } from "shared/libs/classNames";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import cls from "./SideBar.module.scss";

export const SideBar: FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const { t } = useTranslation();

    const toggleCollapse = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls["SideBar"], [], {
                [cls.collapsed]: collapsed,
            })}
        >
            <Button
                noFilter
                contrast
                data-testid="sidebar-btn"
                onClick={toggleCollapse}
            >
                {t(collapsed ? "expand" : "collapse")}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.themeSwitcher} />
                <LangSwitcher className={cls.langSwitcher} />
            </div>
        </div>
    );
};
