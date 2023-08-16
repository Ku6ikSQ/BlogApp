/* eslint-disable @typescript-eslint/indent */
import type { PropsWithChildren, FC } from "react";
import { classNames } from "shared/libs/classNames";
import { AppLink } from "shared/ui/AppLink";
import cls from "./NavLink.module.scss";

interface NavLinkProps extends PropsWithChildren {
    className?: string;
    to: string;
    collapsed: boolean;
    Icon?: any;
}

export const NavLink: FC<NavLinkProps> = (props) => {
    const { className, Icon, to, collapsed, children } = props;

    return (
        <AppLink
            to={to}
            contrast
            className={classNames(cls.NavLink, [className])}
        >
            {!!Icon && <Icon />}
            {!collapsed && <div className={cls.ident}>{children}</div>}
        </AppLink>
    );
};
