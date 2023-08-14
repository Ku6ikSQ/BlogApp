import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/libs/storybook";

const meta = {
    title: "Shared/Modal",
    component: Modal,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        children: "Modal",
    },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        onClose: () => {
            console.log(1);
        },
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
    },
    decorators: [ThemeDecorator("dark")],
};
