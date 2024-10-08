import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Pages/NotFoundPage",
    component: NotFoundPage,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {},
    argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator("dark")],
};
