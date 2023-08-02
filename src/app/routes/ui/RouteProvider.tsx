import { type FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/route";
import { PageLoader } from "widgets/PageLoader";

export const RouteProvider: FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfig.map((r) => (
                    <Route key={r.path} {...r} />
                ))}
            </Routes>
        </Suspense>
    );
};
