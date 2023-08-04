import SingleGalleryPage from "components/Pages/SingleGallery";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getFotoById } from "services/gallery";

const singleGallery = ({ gallery = {} }) => {
  return (
    <>
      <SEO
        title={`Megamix | ${gallery?.description}`}
        description={gallery?.description}
        image={gallery?.images?.[0]}
      />
      <SingleGalleryPage
        title={gallery?.description}
        images={gallery?.images}
      />
    </>
  );
}

export default singleGallery;

export async function getServerSideProps({ locale, params }) {
  const gallery = await getFotoById(params?.id, { lang: locale })

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      gallery
    }
  }
}