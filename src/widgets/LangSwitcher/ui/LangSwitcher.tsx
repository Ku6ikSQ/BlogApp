import { FC } from "react";
import { classNames } from "shared/classNames";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const toggleLanguage = () =>
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

    return (
        <Button
            contrast
            onClick={toggleLanguage}
            className={classNames(cls["LangSwitcher"], [className])}
        >
            {t("langBtn")}
        </Button>
    );
};
