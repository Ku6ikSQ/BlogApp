import type { PropsWithChildren, FC } from "react";
import { classNames } from "shared/libs/classNames";
import cls from "./Typography.module.scss";

type TypogrpahyRole = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

interface TypographyProps extends PropsWithChildren {
    className?: string;
    role: TypogrpahyRole;
    contrast?: boolean;
}

export const Typography: FC<TypographyProps> = (props) => {
    const { className, role, contrast, children, ...otherProps } = props;

    return (
        <p
            className={classNames(cls["Typography"], [className, cls[role]], {
                [cls.contrast]: !!contrast,
            })}
            {...otherProps}
        >
            {children}
        </p>
    );
};
