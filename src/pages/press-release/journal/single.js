import SingleJournal from "components/Pages/SingleJournal";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const SingleJournalPage = () => {
    return (
        <>
            <SEO />
            <SingleJournal />
        </>
    );
}

export default SingleJournalPage;


export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      }
    }
  }