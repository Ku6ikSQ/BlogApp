import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Shared/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        children: "Button",
    },
    argTypes: {
        theme: {
            defaultValue: { summary: "clear" },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: "clear",
    },
};

export const ClearDark: Story = {
    args: {
        theme: "clear",
    },

    decorators: [ThemeDecorator("dark")],
};

export const Outlined: Story = {
    args: {
        theme: "outlined",
    },
};

export const OutlinedDark: Story = {
    args: {
        theme: "outlined",
    },

    decorators: [ThemeDecorator("dark")],
};
