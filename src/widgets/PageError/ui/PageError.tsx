import { type FC } from "react";
import { classNames } from "shared/libs/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import cls from "./PageError.module.scss";

export const PageError: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls["PageError"])}>
            <h4>{t("crashApp")}</h4>
            <Button theme="outlined" onClick={location.reload}>
                {t("reloadApp")}
            </Button>
        </div>
    );
};
