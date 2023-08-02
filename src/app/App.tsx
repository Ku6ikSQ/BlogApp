import { type FC, Suspense, useMemo, useEffect } from "react";
import { classNames } from "shared/libs/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { RouteProvider } from "./routes";
import { Layout } from "./Layout";
import "shared/i18n";
import "./styles/index.scss";

const App: FC = () => {
    const { theme } = useTheme();
    const classes = useMemo(() => classNames("app", [theme]), [theme]);

    useEffect(() => {
        throw new Error("Fuck");
    }, []);

    return (
        <div className={classes}>
            <Suspense>
                <Layout>
                    <RouteProvider />
                </Layout>
            </Suspense>
        </div>
    );
};

export default App;
