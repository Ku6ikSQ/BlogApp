import { type FC } from "react";
import { classNames } from "shared/libs/classNames";
import { useTranslation } from "react-i18next";
import cls from "./PageError.module.scss";

export const PageError: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls["PageError"])}>
            <h4>{t("crashApp")}</h4>
            <button type="button" onClick={location.reload}>
                {t("reloadApp")}
            </button>
        </div>
    );
};
