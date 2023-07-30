import SingleGalleryPage from "components/Pages/SingleGallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const singleGallery = () => {
    return (
        <>
            <SingleGalleryPage />
        </>
    );
}

export default singleGallery;

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      }
    }
  }