import type { Meta, StoryObj } from "@storybook/react";
import HomePage from "./HomePage";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Pages/HomePage",
    component: HomePage,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {},
    argTypes: {},
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator("dark")],
};
