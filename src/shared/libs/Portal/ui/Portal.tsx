import type { PropsWithChildren, FC } from "react";
import { createPortal } from "react-dom";

interface PortalProps extends PropsWithChildren {
    container: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
    const { children, container } = props;

    return createPortal(children, container);
};
