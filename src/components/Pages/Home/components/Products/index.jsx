import Link from 'next/link';
import GrayButton from 'components/UI/Buttons/GrayButton';
import Container from 'components/UI/Container';
import { RightArrowIcon } from 'components/UI/icons';
import ProductCard from 'components/UI/ProductCard';
import { useTranslation } from 'next-i18next';
import cls from './Products.module.scss'

const Products = () => {
    const { t } = useTranslation()

    return (
        <section className={cls.products}>
            <Container className={cls.products__container}>
                <h2 className={cls.products__title}>{t('Продукты')} <RightArrowIcon /></h2>
                <ul className={cls.products__list}>
                    {
                        Array(6).fill(null).map((_, index) => (
                            <ProductCard
                                key={index}
                                title='Granit'
                                image='/images/product.png'
                            />
                        ))
                    }
                </ul>
                <Link href='/products'>
                    <GrayButton className={cls.products__btn}>{t('все продукты')}</GrayButton>
                </Link>
            </Container>
        </section>
    );
}

export default Products;
