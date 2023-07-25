import { FC, useMemo } from "react";
import { classNames } from "shared/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { RouteProvider } from "./routes";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import "./styles/index.scss";

const App: FC = () => {
    const { theme } = useTheme();
    const classes = useMemo(() => classNames("app", [theme]), [theme]);

    return (
        <div className={classes}>
            <NavBar />
            <div className="layout">
                <SideBar />
                <RouteProvider />
            </div>
        </div>
    );
};

export default App;
