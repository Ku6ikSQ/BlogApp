import { type FC } from "react";
import { classNames } from "shared/libs/classNames";
import { Loader } from "shared/ui/Loader/ui/Loader";
import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls["PageLoader"], [className])}>
            <Loader />
        </div>
    );
};
