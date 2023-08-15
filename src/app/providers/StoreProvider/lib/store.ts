import { configureStore } from "@reduxjs/toolkit";
import type { IState } from "./types";
import { counterReducer } from "entities/slices/counter";

export const createStore = (
    initialState: IState = { counter: { value: 0 } }
): ReturnType<typeof configureStore> =>
    configureStore({
        devTools: __IS_DEV__,
        reducer: {
            counter: counterReducer,
        },
        preloadedState: initialState,
    });
