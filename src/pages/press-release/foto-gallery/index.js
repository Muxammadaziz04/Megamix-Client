import FotoGalleryPage from "components/Pages/FotoGallery";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getFotos } from "services/gallery";

const FotoGallery = ({gallery = []}) => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`${t('Фото галерея')} | Megamix `} />
      <FotoGalleryPage gallery={gallery} />
    </>
  );
}

export default FotoGallery;

export async function getServerSideProps({ locale }) {
  const gallery = await getFotos({lang: locale})

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      gallery
    }
  }
}