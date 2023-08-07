/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/indent */
import { type StoryFn } from "@storybook/react";
import { ThemeProvider, type Theme } from "app/providers/ThemeProvider";
import { classNames } from "shared/libs/classNames";

export const ThemeDecorator =
    (theme: Theme) =>
    (Story: StoryFn): any =>
        (
            <ThemeProvider>
                <div className={classNames("app", [theme])}>
                    <Story />
                </div>
            </ThemeProvider>
        );
