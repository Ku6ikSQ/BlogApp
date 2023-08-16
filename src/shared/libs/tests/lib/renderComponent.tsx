import { type RenderResult, render } from "@testing-library/react";
import { type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18n from "shared/i18n/lib/i18n-tests";

export const renderComponent = (component: ReactNode): RenderResult =>
    render(
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
        </BrowserRouter>
    );
