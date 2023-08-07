import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

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
