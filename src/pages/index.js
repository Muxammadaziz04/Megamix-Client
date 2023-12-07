import HomePage from "components/Pages/Home";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getCategories } from "services/categories";
import { getBanners } from "services/gallery";
import { getNews } from "services/news";
import { getProducts } from "services/products";

export default function Home({
  categories = [],
  news = [],
  products = [],
  banners = []
}) {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={`Megamix | ${t('Главная')}`}
      />
      <HomePage
        categories={categories}
        news={news}
        products={products}
        banners={banners}
      />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  const categories = await getCategories({ lang: locale })
  const news = await getNews({ limit: 5, lang: locale })
  const products = await getProducts({ limit: 6, lang: locale, categoryId: '45eeeec8-7ec5-4463-939d-e2a94dd30c1c' })
  const banners = await getBanners()

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      categories,
      news: news?.rows || [],
      products: products?.rows,
      banners
    }
  }
}