import { type FC, type PropsWithChildren } from "react";
import { classNames } from "shared/libs/classNames";
import { Link, type LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
    className?: string;
    contrast?: boolean;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
    const { className, to, contrast, children, ...otherProps } = props;

    return (
        <Link
            to={to}
            className={classNames(cls["AppLink"], [className], {
                [cls.contrast]: !!contrast,
            })}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
