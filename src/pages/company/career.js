import CareerPage from "components/Pages/Career";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCategories } from "services/categories";

const Career = ({ categories = [] }) => {
    return (
        <>
            <SEO />
            <CareerPage categories={categories} />
        </>
    );
}

export default Career;

export async function getServerSideProps({ locale }) {
    const categories = await getCategories({ lang: locale })

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", 'about'])),
            categories,
        }
    }
}