import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import { useTranslation } from 'next-i18next';
import { categories } from '../AboutCompany/data';
import Header from '../AboutCompany/Header';
import cls from './Factory.module.scss'

const FactoryPage = () => {
    const { t } = useTranslation('about')

    return (
        <>
            <Header />
            <Container className={cls.about}>
                <Categories categories={categories} />
                <h2>{t('Мегамикс, в котором воплощены секреты производства')}</h2>
                <p>{t('factory_1')}</p>
                <p>{t('factory_2')}</p>
                <p>{t('factory_3')}</p>
                <p>{t('factory_4')}</p>
            </Container>
        </>
    );
}

export default FactoryPage;
