import { type ButtonHTMLAttributes, type FC } from "react";
import { classNames } from "shared/classNames";
import cls from "./Button.module.scss";

type ButtonTheme = "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    contrast?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = "clear",
        contrast,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls["Button"], [className, cls[theme]], {
                [cls.contrast]: !!contrast,
            })}
            {...otherProps}
        >
            {children}
        </button>
    );
};
