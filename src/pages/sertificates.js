import SertificatesPage from "components/Pages/Sertificates";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";


const Sertificates = () => {
  const {t} = useTranslation()

  return (
    <>
      <SEO title={`${t('Сертификаты')} | Megamix`} description={`${t('Сертификаты')} | Megamix`} />
      <SertificatesPage />
    </>
  );
}

export default Sertificates;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}