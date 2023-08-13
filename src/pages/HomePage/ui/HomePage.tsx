import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "shared/ui/Typography";

const HomePage: FC = () => {
    const { t } = useTranslation("home");

    return <Typography role="h2">{t("title")}</Typography>;
};

export default HomePage;
