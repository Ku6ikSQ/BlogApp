import { type PropsWithChildren, type FC, useEffect } from "react";
import { classNames } from "shared/libs/classNames";
import cls from "./Modal.module.scss";
import { Portal } from "shared/libs/Portal";

interface ModalProps extends PropsWithChildren {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}
export const Modal: FC<ModalProps> = (props) => {
    const { className, isOpen, onClose, children } = props;

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

    return (
        <Portal container={document.getElementById("app") as HTMLElement}>
            <div
                onClick={onClose}
                className={classNames(cls["Overlay"], [className], {
                    [cls.isOpen]: isOpen,
                })}
            >
                <div
                    onClick={stopOnClose as any}
                    className={classNames(cls["Modal"], [])}
                >
                    {/* <div className="head"></div> */}
                    <div className="content">{children}</div>
                </div>
            </div>
        </Portal>
    );
};
