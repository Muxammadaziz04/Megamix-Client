import AboutCompanyPage from "components/Pages/AboutCompany";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutCompany = () => {
    return (
        <>
            <SEO /> 
            <AboutCompanyPage />
        </>
    );
}

export default AboutCompany;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        }
    }
}