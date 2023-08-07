import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Widgets/NavBar",
    component: NavBar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = { decorators: [ThemeDecorator("dark")] };
