import { type RouteProps } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";

enum Routes {
    HOME = "home",
    ABOUT = "about",
    NOT_FOUND = "not_found",
}

type RoutePaths = Record<Routes, string>;

const paths: RoutePaths = {
    [Routes.HOME]: "/",
    [Routes.ABOUT]: "/about",
    [Routes.NOT_FOUND]: "*",
};

export const routeConfig: RouteProps[] = [
    { path: paths[Routes.HOME], element: <HomePage /> },
    { path: paths[Routes.ABOUT], element: <AboutPage /> },
    { path: paths[Routes.NOT_FOUND], element: <NotFoundPage /> },
];
