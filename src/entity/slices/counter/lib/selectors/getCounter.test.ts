import type { IState } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";

const initialState: IState = { counter: { value: 10 } };

describe("Get counter tests", () => {
    let state: IState = initialState;

    beforeEach(() => {
        state = initialState;
    });

    test("Correct counter", () => {
        expect(getCounter(state)).toMatchObject(initialState.counter);
    });
});
