import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/route";

export const RouteProvider = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                {routeConfig.map((r) => (
                    <Route key={r.path} {...r} />
                ))}
            </Routes>
        </Suspense>
    );
};
