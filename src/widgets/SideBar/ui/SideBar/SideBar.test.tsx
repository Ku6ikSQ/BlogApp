import { screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { renderWithI18n } from "shared/libs/tests/lib/renderWithI18n";

describe("Testing the base functional", () => {
    test("Correct render", () => {
        renderWithI18n(<SideBar />);
        const sidebar = screen.getByTestId("sidebar");

        expect(sidebar).toBeInTheDocument();
    });
});
