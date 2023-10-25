import SingleMasterClubPage from "components/Pages/SingleMastersClub";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getClubById } from "services/club";

const SingleMasterClub = ({ club = {} }) => {
    return (
        <>
            <SEO 
                title={club.title}
                description={club?.description}
                image={club.image}
            />
            <SingleMasterClubPage 
                title={club?.title}
                description={club?.description}
                image={club?.image}
                createdAt={club?.createdAt}
            />
        </>
    );
}

export default SingleMasterClub;

export async function getServerSideProps({ locale, params }) {
    const club = await getClubById(params?.id, { lang: locale })
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            club
        }
    }
}