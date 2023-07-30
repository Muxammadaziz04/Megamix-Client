import ProductsPage from "components/Pages/Products";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Products = () => {
    return (
        <>
            <ProductsPage />   
        </>
    );
}

export default Products;

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      }
    }
  }