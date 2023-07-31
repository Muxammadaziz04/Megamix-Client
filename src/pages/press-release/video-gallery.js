import VideoGalleryPage from "components/Pages/VideoGallery";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const VideoGallery = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`Megamix | ${t('Видео галерея')}`} />
      <VideoGalleryPage />
    </>
  );
}

export default VideoGallery;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}