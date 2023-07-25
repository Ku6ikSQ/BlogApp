declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.svg" {
    import React from "react";

    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;

    export default ReactComponent;
}

declare const __IS_DEV__: boolean;
