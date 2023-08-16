import type { Meta, StoryObj } from "@storybook/react";
import { PageError } from "./PageError";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Widgets/PageError",
    component: PageError,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = { decorators: [ThemeDecorator("dark")] };
