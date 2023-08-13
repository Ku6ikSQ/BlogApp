import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { ContrastBackground } from "shared/libs/storybook";

const meta = {
    title: "Shared/Typography",
    component: Typography,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        children: "Typography",
    },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: {
        role: "h1",
    },
};

export const H1Contrast: Story = {
    args: {
        role: "h1",
        contrast: true,
    },

    decorators: [ContrastBackground],
};

export const H2: Story = {
    args: {
        role: "h2",
    },
};

export const H2Contrast: Story = {
    args: {
        role: "h2",
        contrast: true,
    },

    decorators: [ContrastBackground],
};

export const H3: Story = {
    args: {
        role: "h3",
    },
};

export const H3Contrast: Story = {
    args: {
        role: "h3",
        contrast: true,
    },

    decorators: [ContrastBackground],
};

export const H4: Story = {
    args: {
        role: "h4",
    },
};

export const H4Contrast: Story = {
    args: {
        role: "h4",
        contrast: true,
    },

    decorators: [ContrastBackground],
};

export const H5: Story = {
    args: {
        role: "h5",
    },
};

export const H5Contrast: Story = {
    args: {
        role: "h5",
        contrast: true,
    },

    decorators: [ContrastBackground],
};

export const H6: Story = {
    args: {
        role: "h6",
    },
};

export const H6Contrast: Story = {
    args: {
        role: "h6",
        contrast: true,
    },

    decorators: [ContrastBackground],
};

export const P: Story = {
    args: {
        role: "p",
    },
};

export const PContrast: Story = {
    args: {
        role: "p",
        contrast: true,
    },

    decorators: [ContrastBackground],
};
