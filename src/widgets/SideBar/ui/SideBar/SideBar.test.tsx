import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/i18n/lib/i18n-tests";

describe("Testing the base functional", () => {
    test("Correct render", () => {
        render(
            <I18nextProvider i18n={i18n}>
                <SideBar />
            </I18nextProvider>
        );
        const sidebar = screen.getByTestId("sidebar");

        expect(sidebar).toBeInTheDocument();
    });
});
