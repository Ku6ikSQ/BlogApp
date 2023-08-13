import { type StoryFn } from "@storybook/react";

export const ContrastBackground = (Story: StoryFn): any => (
    <div style={{ minHeight: "100vh", background: "var(--contrast-bg-color)" }}>
        <Story />
    </div>
);
