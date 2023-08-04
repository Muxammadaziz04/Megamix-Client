import SEO from "components/SEO";
import MastersClubPage from "components/Pages/MastersClub";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getClub } from "services/club";

const MastersClub = ({club = []}) => {
    const { t } = useTranslation()

    return (
        <>
            <SEO title={t('Клуб мастеров')} />
            <MastersClubPage club={club} />
        </>
    );
}

export default MastersClub;

export async function getServerSideProps({ locale }) {
    const club = await getClub({ lang: locale })
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            club
        }
    }
}