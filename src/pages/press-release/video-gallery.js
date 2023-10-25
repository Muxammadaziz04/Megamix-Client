import VideoGalleryPage from "components/Pages/VideoGallery";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getVideos } from "services/gallery";

const VideoGallery = ({videos = []}) => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`${t('Видео галерея')} | Megamix`} description={`${t('Видео галерея')} | Megamix`} />
      <VideoGalleryPage videos={videos} />
    </>
  );
}

export default VideoGallery;

export async function getServerSideProps({ locale }) {
  const videos = await getVideos({ lang: locale })

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      videos
    }
  }
}