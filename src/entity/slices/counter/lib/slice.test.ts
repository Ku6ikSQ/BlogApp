import { counterActions, counterReducer } from "./slice";
import type { CounterState } from "./types";

const initState: CounterState = { value: 10 };

describe("Test slice", () => {
    let counterState: CounterState = initState;

    beforeEach(() => (counterState = initState));

    test("Increment action", () => {
        expect(
            counterReducer(counterState, counterActions.increment())
        ).toMatchObject({ value: initState.value + 1 });
    });

    test("Decrement action", () => {
        expect(
            counterReducer(counterState, counterActions.decrement())
        ).toMatchObject({ value: initState.value - 1 });
    });

    test("Without initial state", () => {
        expect(
            counterReducer(undefined, counterActions.increment())
        ).toMatchObject({ value: 1 });
    });
});
