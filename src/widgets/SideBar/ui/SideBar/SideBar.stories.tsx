import type { Meta, StoryObj } from "@storybook/react";
import { SideBar } from "./SideBar";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Widgets/SideBar",
    component: SideBar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator("dark")],
};
