import VacanciesPage from "components/Pages/Vacancies";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Vacancies = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`Megamix | ${t('Вакансии')}`} />
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