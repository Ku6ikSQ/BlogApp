import { type RouteProps } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";

enum Routes {
    HOME = "home",
    ABOUT = "about",
}

type RoutePaths = Record<Routes, string>;

const paths: RoutePaths = {
    [Routes.HOME]: "/",
    [Routes.ABOUT]: "/about"
};

export const routeConfig: RouteProps[] = [
    { path: paths[Routes.HOME], element: <HomePage /> },
    { path: paths[Routes.ABOUT], element: <AboutPage /> }
];
