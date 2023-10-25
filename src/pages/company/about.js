import AboutCompanyPage from "components/Pages/AboutCompany";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const AboutCompany = () => {
    const {t} = useTranslation()
    return (
        <>
            <SEO 
                title={t('О Компании') + ' | Megamix'}
                description={t('О Компании') + ' | Megamix'}
            /> 
            <AboutCompanyPage />
        </>
    );
}

export default AboutCompany;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", 'about'])),
        }
    }
}