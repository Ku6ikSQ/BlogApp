import { type FC } from "react";
import { classNames } from "shared/libs/classNames";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const toggleLanguage = async (): Promise<any> =>
        await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

    return (
        <Button
            contrast
            noFilter
            onClick={toggleLanguage}
            className={classNames("", [className])}
        >
            {t("langBtn")}
        </Button>
    );
};
