import { type FC, Suspense, useMemo } from "react";
import { classNames } from "shared/libs/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { RouteProvider } from "./routes";
import { Layout } from "./Layout";
import "shared/i18n";
import "./styles/index.scss";

const App: FC = () => {
    const { theme } = useTheme();
    const classes = useMemo(() => classNames("app", [theme]), [theme]);

    return (
        <div className={classes} id="app">
            <Suspense>
                <Layout>
                    <RouteProvider />
                </Layout>
            </Suspense>
        </div>
    );
};

export default App;
