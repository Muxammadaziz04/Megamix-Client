import FactoryPage from "components/Pages/Factory";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Factory = () => {
    const {t} = useTranslation()
    return (
        <>
            <SEO 
                title={t('Производство') + ' | Megamix'}
                description={t('Производство') + ' | Megamix'}
            />
            <FactoryPage />
        </>
    );
}

export default Factory;

export async function getServerSideProps({ locale }) {

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", 'about'])),
        }
    }
}