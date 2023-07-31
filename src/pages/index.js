import HomePage from "components/Pages/Home";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCategories } from "services/categories";

export default function Home({ categories = []}) {
  return (
    <>
      <SEO />
      <HomePage categories={categories} />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  const categories = await getCategories({ lang: locale })
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      categories
    }
  }
}