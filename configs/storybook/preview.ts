import { type Preview } from "@storybook/react";
import {
    StyleDecorator,
    I18nDecorator,
    ThemeDecorator,
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
    decorators: [StyleDecorator, I18nDecorator, ThemeDecorator("light")],
};

export default preview;
