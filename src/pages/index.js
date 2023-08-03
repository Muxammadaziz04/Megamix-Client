import HomePage from "components/Pages/Home";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCategories } from "services/categories";
import { getNews } from "services/news";
import { getProducts } from "services/products";

export default function Home({ 
  categories = [],
  news = [],
  products = [],
}) {

  return (
    <>
      <SEO />
      <HomePage
        categories={categories}
        news={news}
        products={products}
      />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  const categories = await getCategories({ lang: locale })
  const news = await getNews({ limit: 5, lang: locale })
  const products = await getProducts({limit: 6, lang: locale})

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      categories,
      news: news?.rows || [],
      products: products?.rows,
    }
  }
}