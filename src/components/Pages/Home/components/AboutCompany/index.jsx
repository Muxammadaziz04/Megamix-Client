import RoundedButton from 'components/UI/Buttons/RoundedButton';
import Container from 'components/UI/Container';
import { OrangeBlur, RightIcon } from 'components/UI/icons';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cls from './AboutCompany.module.scss'

const AboutCompany = () => {
    const { t } = useTranslation()
    const router = useRouter()

    return (
        <section className={cls.about}>
            <Container>
                <h2 className={cls.about__title}>
                    <Link href='/company/about'>
                        <a>
                            {t('О Компании')}
                        </a>
                    </Link>
                </h2>
            </Container>
            <div className={cls.about__image}>
                <Container className={cls.about__image__container}>
                    <p>
                        {t('Коротко о компании')}
                        <OrangeBlur />
                    </p>
                    <RoundedButton onClick={() => router.push('/company/about')}>{t('подробнее о компании')}<RightIcon /></RoundedButton>
                </Container>
            </div>
        </section>
    );
}

export default AboutCompany;
