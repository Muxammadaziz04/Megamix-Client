import HonorsPage from "components/Pages/Honors";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Honors = () => {
    return (
        <>
            <HonorsPage />
        </>
    );
}

export default Honors;

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      }
    }
  }