import FactoryPage from "components/Pages/Factory";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Factory = () => {
    return (
        <>
            <SEO />
            <FactoryPage />
        </>
    );
}

export default Factory;

export async function getServerSideProps({ locale }) {

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        }
    }
}