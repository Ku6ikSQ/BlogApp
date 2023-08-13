import type { Meta, StoryObj } from "@storybook/react";
import { AppBar } from "./AppBar";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Widgets/AppBar",
    component: AppBar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = { decorators: [ThemeDecorator("dark")] };
