import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import JournalCard from 'components/UI/JournalCard';
import journals from 'constants/journals.constants';
import { useTranslation } from 'next-i18next';
import { breadCrumbs, categories } from './data';
import cls from './Journal.module.scss'

const JournalPage = () => {
    const {t} = useTranslation()

    return (
        <div className={cls.journal}>
            <Container className={cls.journal__container}>
                <BreadCrumbs title={t('Журнал')} breadCrumbs={breadCrumbs} />
                <Categories categories={categories} />
                <div className={cls.journal__list}>
                    {
                        journals?.length > 0 && journals.map((journal) => (
                            <JournalCard
                                key={journal.id}
                                image={journal.image}
                                descriptions={journal.themes}
                            />
                        ))
                    }
                </div>
            </Container>
        </div>
    );
}

export default JournalPage;
