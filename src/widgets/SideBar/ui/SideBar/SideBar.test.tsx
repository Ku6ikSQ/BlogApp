import { screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { renderComponent } from "shared/libs/tests";

describe("Testing the base functional", () => {
    test("Correct render", () => {
        renderComponent(<SideBar />);
        const sidebar = screen.getByTestId("sidebar");

        expect(sidebar).toBeInTheDocument();
    });
});
