import SingleNewsPage from "components/Pages/SingelNews";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getNewsById } from "services/news";

const SingleNews = ({ news = {} }) => {
  return (
    <>
      <SEO
        title={`Megamix | ${news?.title}`}
        description={news?.description}
        image={news?.image}
      />
      <SingleNewsPage news={news} />
    </>
  );
}

export default SingleNews;

export async function getServerSideProps({ locale, params }) {
  const news = await getNewsById(params?.id, { lang: locale })

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      news
    }
  }
}