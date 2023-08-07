import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/libs/storybook";
import { Layout } from "./Layout";

const meta = {
    title: "App/Layout",
    component: Layout,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {},
    argTypes: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator("dark")],
};
