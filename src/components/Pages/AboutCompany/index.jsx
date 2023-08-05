import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import cls from './AboutCompany.module.scss'
import { categories } from './data';
import Header from './Header';

const AboutCompanyPage = () => {
    const {t} = useTranslation('about')
    return (
        <>
            <Header />
            <Container className={cls.about}>
                <Categories categories={categories} />
                <div className={cls.about__block}>
                    <div className={cls.about__image}>
                        <Image
                            src='/images/collectiv.png'
                            layout='fill'
                            objectFit='cover'
                            alt='about company'
                        />
                    </div>
                    <div className={cls.about__info}>
                        <h3>{t('Мегамикс, в котором воплощены секреты производства')}</h3>
                        <p>{t('Продукция «MEGAMIX» является строительно-отделочными материалами премиум класса, качество которой было высоко оценено как строителями-специалистами, так и индивидуальными потребителями.')}</p>
                    </div>
                </div>
            </Container>
            <div className={cls.scene}>
                <Container className={cls.scene__block}>
                    <h3>{t('Сцена из жизни Megamix')}</h3>
                    <p>{t('about_company')}</p>
                </Container>
            </div>
        </>
    );
}

export default AboutCompanyPage;
