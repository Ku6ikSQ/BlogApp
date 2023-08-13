import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "shared/ui/Typography";

const AboutPage: FC = () => {
    const { t } = useTranslation("about");

    return <Typography role="h2">{t("title")}</Typography>;
};

export default AboutPage;
