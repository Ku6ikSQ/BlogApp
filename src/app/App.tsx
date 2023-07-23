import { FC, useMemo } from "react";
import { classNames } from "shared/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { Link } from "react-router-dom";
import { RouteProvider } from "./routes";
import "./styles/index.scss";

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();
    const classes = useMemo(() => classNames("app", {}, [theme]), [theme]);

    return (
        <div className={classes}>
            <RouteProvider />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default App;
