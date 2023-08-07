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
    args: {},
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
    args: {},
};

export const DarkTheme: Story = {
    args: {},
    decorators: [ThemeDecorator("dark")],
};
