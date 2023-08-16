import { type Preview } from "@storybook/react";
import { createStore } from "app/providers/StoreProvider";
import {
    StyleDecorator,
    I18nDecorator,
    ThemeDecorator,
    RouteDecorator,
} from "shared/libs/storybook";
import { MockStore } from "shared/libs/storybook/lib/decorators/Store";

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
        MockStore(createStore()),
    ],
};

export default preview;
