import { type FC } from "react";
import { classNames } from "shared/libs/classNames";
import cls from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

export const NotFoundPage: FC = () => {
    const { t } = useTranslation("notFound");

    return (
        <div className={classNames(cls["NotFoundPage"])}>
            <h1>{t("errorMsg")}</h1>
        </div>
    );
};
