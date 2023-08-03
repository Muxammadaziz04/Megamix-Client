import NewsPage from "components/Pages/News";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getNews } from "services/news";

const News = ({news = []}) => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`Megamix | ${t('Новости')}`} />
      <NewsPage news={news} />
    </>
  );
}

export default News;

export async function getServerSideProps({ locale }) {
  const news = await getNews({lang: locale, limit: 1000})

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      news: news?.rows
    }
  }
}