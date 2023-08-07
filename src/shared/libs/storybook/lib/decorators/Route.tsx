import { type StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouteDecorator = (Story: StoryFn): any => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
