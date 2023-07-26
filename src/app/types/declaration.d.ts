/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/naming-convention */

declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.svg" {
    import type React from "react";

    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;

    export default ReactComponent;
}

declare const __IS_DEV__: boolean;
