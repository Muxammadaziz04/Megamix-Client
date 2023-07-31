import NewsPage from "components/Pages/News";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const News = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`Megamix | ${t('Новости')}`} />
      <NewsPage />
    </>
  );
}

export default News;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}