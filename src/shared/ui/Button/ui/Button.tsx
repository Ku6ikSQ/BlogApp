import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/classNames";
import cls from "./Button.module.scss";

type ButtonTheme = "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, theme = "clear", children, ...otherProps } = props;

    return (
        <button
            className={classNames(cls["Button"], [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
