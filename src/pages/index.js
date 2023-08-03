import HomePage from "components/Pages/Home";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCategories } from "services/categories";
import { getNews } from "services/news";

export default function Home({ categories = [], news = [] }) {
  return (
    <>
      <SEO />
      <HomePage
        categories={categories}
        news={news}
      />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  const categories = await getCategories({ lang: locale })
  const news = await getNews({ limit: 3, lang: locale })

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      categories,
      news
    }
  }
}