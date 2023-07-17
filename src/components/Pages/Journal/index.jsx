import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import JournalCard from 'components/UI/JournalCard';
import { breadCrumbs, categories } from './data';
import cls from './Journal.module.scss'

const JournalPage = () => {
    return (
        <div className={cls.journal}>
            <Container className={cls.journal__container}>
                <BreadCrumbs title='Журнал' breadCrumbs={breadCrumbs} />
                <Categories categories={categories} />
                <div className={cls.journal__list}>
                    <JournalCard image={'/images/journal.png'} descriptions={Array(2).fill({ title: 'Темы журнала с короткой описанием', desc: 'На протяжении своей деятельности более чем 10 лет «MEGAMIX» накопил богатейший опыт работы в сфере производства строительно-отделочных материалов, и сегодня список ассортимента достиг свыше 40 наименований готовой продукции.' })} />
                    <JournalCard image={'/images/journal.png'} descriptions={Array(2).fill({ title: 'Темы журнала с короткой описанием', desc: 'На протяжении своей деятельности более чем 10 лет «MEGAMIX» накопил богатейший опыт работы в сфере производства строительно-отделочных материалов, и сегодня список ассортимента достиг свыше 40 наименований готовой продукции.' })} />
                </div>
            </Container>
        </div>
    );
}

export default JournalPage;