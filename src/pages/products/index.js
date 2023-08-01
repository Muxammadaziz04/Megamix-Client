import ProductsPage from "components/Pages/Products";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { getCategories } from "services/categories";

const Products = ({categories = []}) => {
  const router = useRouter()

  return (
    <>
      <SEO title={`Megamix | ${categories?.find(ctg => ctg.id === router?.query?.id)?.name}`} />
      <ProductsPage categories={categories} />
    </>
  );
}

export default Products;

export async function getServerSideProps({ locale, query }) {
  const categories = await getCategories({ lang: locale })
  if(!categories?.find(ctg => ctg.id === query?.id)) {
    return {
      redirect: {
        replace: true,
        permanent: false,
        destination: `${locale !== 'ru' ? `/${locale}` : ''}/products?id=${categories?.[0]?.id}`
      }
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      categories
    }
  }
}