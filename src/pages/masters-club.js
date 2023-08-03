import SEO from "components/SEO";
import MastersClubPage from "components/Pages/MastersClub";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      }
    }
  }