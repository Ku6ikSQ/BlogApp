import type { IState } from "app/providers/StoreProvider";
import type { CounterState } from "../types";

export const getCounter = (state: IState): CounterState => state.counter;
