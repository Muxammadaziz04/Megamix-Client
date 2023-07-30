import VideoGalleryPage from "components/Pages/VideoGallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const VideoGallery = () => {
    return (
        <>
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