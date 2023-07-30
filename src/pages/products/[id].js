import SingleProductPage from "components/Pages/SingleProduct";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SingleProduct = () => {
    return (
        <>
         <SingleProductPage />   
        </>
    );
}

export default SingleProduct;

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      }
    }
  }