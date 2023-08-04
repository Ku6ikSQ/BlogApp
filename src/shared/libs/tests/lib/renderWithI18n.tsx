import { render } from "@testing-library/react";
import { type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/i18n/lib/i18n-tests";

export const renderWithI18n = (
    component: ReactNode
): ReturnType<typeof render> =>
    render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
