import Link from 'next/link';
import GrayButton from 'components/UI/Buttons/GrayButton';
import Container from 'components/UI/Container';
import { RightArrowIcon } from 'components/UI/icons';
import ProductCard from 'components/UI/ProductCard';
import { useTranslation } from 'next-i18next';
import cls from './Products.module.scss'

const Products = ({
  products = [],
}) => {
    const { t } = useTranslation()

    return (
        <section className={cls.products}>
            <Container className={cls.products__container}>
                <h2 className={cls.products__title}>
                    <Link href='/products'>
                        <a>
                            {t('Продукты')} <RightArrowIcon />
                        </a>
                    </Link>
                </h2>
                <ul className={cls.products__list}>
                    {
                        products?.length > 0 && products.map((prd) => (
                            <ProductCard
                                key={prd?.id}
                                title={prd?.title}
                                image={prd?.foto}
                                description={prd?.shortDescription}
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
