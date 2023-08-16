import { type PropsWithChildren, type FC, useEffect } from "react";
import { classNames } from "shared/libs/classNames";
import cls from "./Modal.module.scss";
import { Portal } from "shared/libs/Portal";

interface ModalProps extends PropsWithChildren {
    className?: string;
    noPortal?: boolean;
    isOpen: boolean;
    onClose: () => void;
}
export const Modal: FC<ModalProps> = (props) => {
    const { className, isOpen, onClose, noPortal, children, ...otherProps } =
        props;

    const stopOnClose = (e: MouseEvent): void => {
        e.stopPropagation();
    };

    const keyboardListener = (e: KeyboardEvent): void => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", keyboardListener);

        return () => {
            window.removeEventListener("keydown", keyboardListener);
        };
    }, []);

    const ModalComponent: JSX.Element = (
        <div
            data-testid="overlay"
            onClick={onClose}
            className={classNames(cls["Overlay"], [className], {
                [cls.isOpen]: isOpen,
            })}
        >
            <div
                data-testid="modal"
                onClick={stopOnClose as any}
                className={classNames(cls["Modal"], [])}
                {...otherProps}
            >
                {/* <div className="head"></div> */}
                <div className="content">{children}</div>
            </div>
        </div>
    );

    if (noPortal) return ModalComponent;

    return (
        <Portal container={document.getElementById("app") as HTMLElement}>
            {ModalComponent}
        </Portal>
    );
};
