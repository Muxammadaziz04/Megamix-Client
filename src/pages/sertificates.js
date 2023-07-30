import SertificatesPage from "components/Pages/Sertificates";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const Sertificates = () => {
    return (
        <>
         <SertificatesPage />   
        </>
    );
}

export default Sertificates;

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      }
    }
  }