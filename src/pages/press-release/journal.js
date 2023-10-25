import JournalPage from "components/Pages/Journal";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Journal = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={`${t('Журнал')} | Megamix`} />
      <JournalPage />
    </>
  );
}

export default Journal;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}