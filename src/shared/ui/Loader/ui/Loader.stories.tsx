import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Shared/Loader",
    component: Loader,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {},
    argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator("dark")],
};
