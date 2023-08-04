import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Testing the base functional", () => {
    test("Correct render", () => {
        render(<Button data-testid="btn">Button</Button>);

        const btn = screen.getByTestId("btn");

        expect(btn).toHaveTextContent("Button");
        expect(btn).toHaveClass("Button");
        expect(btn).toHaveClass("clear");
    });
});
