import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { createStore } from "../lib/store";

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
    <Provider store={createStore()}>{children}</Provider>
);
