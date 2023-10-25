import VacanciesPage from "components/Pages/Vacancies";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getVacancies } from "services/vacancy";

const Vacancies = ({vacancies = []}) => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`${t('Вакансии')} | Megamix`} description={`${t('Вакансии')} | Megamix`} />
      <VacanciesPage vacancies={vacancies} />
    </>
  );
}

export default Vacancies;

export async function getServerSideProps({ locale }) {
  const vacancies = await getVacancies({ lang: locale })

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      vacancies
    }
  }
}