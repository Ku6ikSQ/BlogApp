import type { Meta, StoryObj } from "@storybook/react";
import AboutPage from "./AboutPage";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Pages/AboutPage",
    component: AboutPage,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {},
    argTypes: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator("dark")],
};
