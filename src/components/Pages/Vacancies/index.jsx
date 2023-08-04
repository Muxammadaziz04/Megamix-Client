import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import VacancyCard from 'components/UI/VacancyCard';
import { breadCrumbs, categories } from './data';
import cls from './Vacancies.module.scss'

const VacanciesPage = ({vacancies = []}) => {
    return (
        <div className={cls.vacancies}>
            <Container className={cls.vacancies__container}>
                <BreadCrumbs title='Вакансии' breadCrumbs={breadCrumbs} />
                <Categories categories={categories} />
                <ul className={cls.vacancies__list}>
                    {
                        vacancies?.length > 0 && vacancies.map(vacancy => (
                            <VacancyCard 
                                key={vacancy.id}
                                title={vacancy?.description}
                                salary={vacancy?.salary}
                            />
                        ))
                    }
                </ul>
            </Container>
        </div>
    );
}

export default VacanciesPage;
