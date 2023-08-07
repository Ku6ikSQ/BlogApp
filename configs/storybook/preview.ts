import { type Preview } from "@storybook/react";
import {
    StyleDecorator,
    I18nDecorator,
    ThemeDecorator,
    RouteDecorator,
} from "shared/libs/storybook";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator("light"),
        I18nDecorator,
        RouteDecorator,
    ],
};

export default preview;
