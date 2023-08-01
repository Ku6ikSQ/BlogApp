import { type FC, Suspense, useMemo } from "react";
import { classNames } from "shared/libs/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { RouteProvider } from "./routes";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import "./styles/index.scss";
import "shared/i18n";

const App: FC = () => {
    const { theme } = useTheme();
    const classes = useMemo(() => classNames("app", [theme]), [theme]);

    return (
        <div className={classes}>
            <Suspense>
                <NavBar />
                <div className="layout">
                    <SideBar />
                    <RouteProvider />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
