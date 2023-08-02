import { type PropsWithChildren, type FC } from "react";
import { classNames } from "shared/libs/classNames";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import cls from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className={classNames(cls["Layout"])}>
                <SideBar />

                <div className={classNames(cls["PageContent"])}>{children}</div>
            </div>
        </>
    );
};
