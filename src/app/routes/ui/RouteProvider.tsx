import { type FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/route";
import cls from "./RouteProvider.module.scss";

export const RouteProvider: FC = () => {
    return (
        <div className={cls.page}>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    {routeConfig.map((r) => (
                        <Route key={r.path} {...r} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};
