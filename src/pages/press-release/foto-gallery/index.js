import FotoGalleryPage from "components/Pages/FotoGallery";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const FotoGallery = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`Megamix | ${t('Фото галерея')}`} />
      <FotoGalleryPage />
    </>
  );
}

export default FotoGallery;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}