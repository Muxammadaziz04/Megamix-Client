import SingleNewsPage from "components/Pages/SingelNews";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SingleNews = () => {
    return (
        <>
            <SingleNewsPage />
        </>
    );
}

export default SingleNews;

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      }
    }
  }