import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Shared/AppLink",
    component: AppLink,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        to: "/",
        children: "Link",
    },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = { decorators: [ThemeDecorator("dark")] };
