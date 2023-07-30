import RoundedButton from 'components/UI/Buttons/RoundedButton';
import Container from 'components/UI/Container';
import { OrangeBlur, RightIcon } from 'components/UI/icons';
import { useTranslation } from 'next-i18next';
import cls from './AboutCompany.module.scss'

const AboutCompany = () => {
    const {t} = useTranslation()

    return (
        <section className={cls.about}>
            <Container>
                <h2 className={cls.about__title}>{t('О Компании')}</h2>
            </Container>
            <div className={cls.about__image}>
                <Container className={cls.about__image__container}>
                    <p>
                        {t('Коротко о компании')}
                        <OrangeBlur />
                    </p>
                    <RoundedButton>{t('подробнее о компании')}<RightIcon /></RoundedButton>
                </Container>
            </div>
        </section>
    );
}

export default AboutCompany;
