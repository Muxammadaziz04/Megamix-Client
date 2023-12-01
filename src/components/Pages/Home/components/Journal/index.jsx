import { useTranslation } from 'next-i18next';
import JournalCard from 'components/UI/JournalCard';
import Container from 'components/UI/Container';
import Link from 'next/link';
import journals from 'constants/journals.constants';
import cls from './Journal.module.scss'

const Journal = () => {
    const { t } = useTranslation()

    return (
        <section className={cls.journal}>
            <Container className={cls.journal__container}>
                <h2 className={cls.journal__title}>
                    <Link href='/press-release/journal'>
                        <a>
                            {t('Читайте наши журналы и узнавайте о нас больше')}
                        </a>
                    </Link>
                </h2>
                {
                    journals?.length > 0 && journals.map((journal) => (
                        <JournalCard 
                            key={journal.id}
                            images={journal.images} 
                            descriptions={journal.themes} 
                        />
                    ))
                }
            </Container>
        </section>
    );
}

export default Journal;
