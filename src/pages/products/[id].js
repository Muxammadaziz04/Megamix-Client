import SingleProductPage from "components/Pages/SingleProduct";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getProductsById } from "services/products";

const SingleProduct = ({product = {}}) => {
  console.log(product);
  return (
    <>
      <SEO 
        title={`Megamix | ${product?.title}`}
        description={product?.description}
        image={product?.foto}
      />
      <SingleProductPage 
        image={product?.foto}
        title={product?.title}
        weight={product?.weight}
        description={product?.description}
        technicalSpecifications={product?.technicalSpecifications}
        packaging={product?.packaging}
        video={product?.video}
        calcLayerWidth={product?.calcLayerWidth}
        calcVolume={product?.calcVolume}
        calcWaterQuantity={product?.calcWaterQuantity}
        calcWeight={product?.calcWeight}
      />
    </>
  );
}

export default SingleProduct;

export async function getServerSideProps({ locale, params }) {
  const product = await getProductsById(params?.id, {lang: locale })
  console.log(product);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      product
    }
  }
}