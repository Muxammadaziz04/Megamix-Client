import NewsPage from "components/Pages/News";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const News = () => {
    return (
        <>
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