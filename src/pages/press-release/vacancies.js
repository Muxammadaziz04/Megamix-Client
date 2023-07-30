import VacanciesPage from "components/Pages/Vacancies";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Vacancies = () => {
    return (
        <>
            <VacanciesPage />
        </>
    );
}

export default Vacancies;

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      }
    }
  }