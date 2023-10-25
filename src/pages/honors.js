import HonorsPage from "components/Pages/Honors";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Honors = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`${t('Награды')} | Megamix`} />
      <HonorsPage />
    </>
  );
}

export default Honors;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}