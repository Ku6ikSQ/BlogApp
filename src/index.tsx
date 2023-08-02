import App from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

render(
    <StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>,
    document.getElementById("root")
);
