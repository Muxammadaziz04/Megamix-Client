import FotoGalleryPage from "components/Pages/FotoGallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const FotoGallery = () => {
    return (
        <>
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