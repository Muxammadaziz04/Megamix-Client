import { useTranslation } from 'next-i18next';
import JournalCard from 'components/UI/JournalCard';
import Container from 'components/UI/Container';
import cls from './Journal.module.scss'

const Journal = () => {
    const {t} = useTranslation()

    return (
        <section className={cls.journal}>
            <Container className={cls.journal__container}>
                <h2 className={cls.journal__title}>{t('Читайте наши журналы и узнавайте о нас больше')}</h2>
                <JournalCard image={'/images/journal.png'} descriptions={Array(2).fill({title: 'Темы журнала с короткой описанием', desc: 'На протяжении своей деятельности более чем 10 лет «MEGAMIX» накопил богатейший опыт работы в сфере производства строительно-отделочных материалов, и сегодня список ассортимента достиг свыше 40 наименований готовой продукции.'})} />                
            </Container>
        </section>
    );
}

export default Journal;
