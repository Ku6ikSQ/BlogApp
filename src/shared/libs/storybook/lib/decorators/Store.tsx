/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/indent */
import type { Store } from "@reduxjs/toolkit";
import type { StoryFn } from "@storybook/react";
import { Provider } from "react-redux";

export const MockStore =
    (store: Store) =>
    (Story: StoryFn): any =>
        (
            <Provider store={store}>
                <Story />
            </Provider>
        );
