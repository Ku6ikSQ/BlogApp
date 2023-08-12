import { type ButtonHTMLAttributes, type FC } from "react";
import { classNames } from "shared/libs/classNames";
import cls from "./Button.module.scss";

type ButtonTheme = "clear" | "outlined";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    contrast?: boolean;
    noFilter?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = "clear",
        contrast,
        noFilter,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls["Button"], [className, cls[theme]], {
                [cls.contrast]: !!contrast,
                [cls.noFilter]: !!noFilter,
            })}
            {...otherProps}
        >
            {children}
        </button>
    );
};
