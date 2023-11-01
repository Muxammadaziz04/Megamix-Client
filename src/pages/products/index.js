import ProductsPage from "components/Pages/Products";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { getCategories } from "services/categories";
import { getProducts } from "services/products";

const Products = ({ categories = [], products = [], productsCount = 0 }) => {
  const router = useRouter()
  const {t} = useTranslation()

  return (
    <>
      <SEO 
        title={`${categories?.find(ctg => ctg.id === router?.query?.id)?.name} | Megamix | ${t('Страница')} - ${router.query?.page || 1}`} 
        description={`${categories?.find(ctg => ctg.id === router?.query?.id)?.name} | Megamix | ${t('Страница')} - ${router.query?.page || 1}`}
      />
      <ProductsPage
        categories={categories}
        products={products}
        productsCount={productsCount}
      />
    </>
  );
}

export default Products;

export async function getServerSideProps({ locale, query }) {
  const categories = await getCategories({ lang: locale })

  if (!categories?.find(ctg => ctg.id === query?.id)) {
    const params = new URLSearchParams({ ...query, id: categories?.[0]?.id })
    return {
      redirect: {
        replace: true,
        permanent: false,
        destination: `${locale !== 'ru' ? `/${locale}` : ''}/products?${params.toString()}`
      }
    }
  }

  const products = await getProducts({ lang: locale, limit: 6, page: query?.page || 1, categoryId: query?.id })

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      categories,
      products: products?.rows,
      productsCount: products?.count
    }
  }
}