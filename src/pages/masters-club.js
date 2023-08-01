import MastersClubPage from "components/Pages/MastersClub";
import SEO from "components/SEO";
import { useTranslation } from "next-i18next";

const MastersClub = () => {
    const { t } = useTranslation()

    return (
        <>
            <SEO title={t('Клуб мастеров')} />
            <MastersClubPage />
        </>
    );
}

export default MastersClub;
