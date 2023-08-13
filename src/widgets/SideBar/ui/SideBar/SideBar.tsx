import { type FC, useState } from "react";
import { classNames } from "shared/libs/classNames";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import cls from "./SideBar.module.scss";
import { paths } from "shared/route";
import { NavLink } from "shared/ui/NavLink";
import HomeIcon from "app/assets/icons/HomeIcon.svg";
import AboutIcon from "app/assets/icons/AboutIcon.svg";
import BurgerIcon from "app/assets/icons/BurgerIcon.svg";

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
                <BurgerIcon className={cls.burger} />
            </Button>

            <div className={cls["links"]}>
                <NavLink collapsed={collapsed} Icon={HomeIcon} to={paths.home}>
                    {t("home")}
                </NavLink>
                <NavLink
                    collapsed={collapsed}
                    Icon={AboutIcon}
                    to={paths.about}
                >
                    {t("about")}
                </NavLink>
            </div>
        </div>
    );
};
