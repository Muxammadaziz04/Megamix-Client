import SertificatesPage from "components/Pages/Sertificates";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const Sertificates = () => {
  return (
    <>
      <SEO title={'Megamix | Сертификаты'} />
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