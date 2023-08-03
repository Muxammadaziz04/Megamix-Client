import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Container from 'components/UI/Container';
import SertificateCard from 'components/UI/SertificateCard';
import cls from './Sertificates.module.scss'
import sertificates from 'constants/serticates.constants';

const Sertificates = () => {
    const { t } = useTranslation()

    return (
        <section className={cls.sertificates}>
            <Container className={cls.sertificates__container}>
                <h2 className={cls.sertificates__title}>
                    <Link href='/products'>
                        <a>
                            {t('Сертификаты')}
                        </a>
                    </Link>
                </h2>
                <ul className={cls.sertificates__block}>
                    {
                        sertificates?.length > 0 && sertificates.map((sert, index) => (
                            <SertificateCard 
                                key={index}
                                image={sert}
                                objectFit={index === 2 ? 'contain' : 'cover'}
                            />
                        ))
                    }
                </ul>
            </Container>
        </section>
    );
}

export default Sertificates;
