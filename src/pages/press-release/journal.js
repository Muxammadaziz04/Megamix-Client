import JournalPage from "components/Pages/Journal";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Journal = () => {
    return (
        <>
         <JournalPage />   
        </>
    );
}

export default Journal;

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      }
    }
  }