import GrayButton from 'components/UI/Buttons/GrayButton';
import Container from 'components/UI/Container';
import { RightArrowIcon } from 'components/UI/icons';
import ProductCard from 'components/UI/ProductCard';
import Link from 'next/link';
import cls from './Products.module.scss'

const Products = () => {
    return (
        <section className={cls.products}>
            <Container className={cls.products__container}>
                <h2 className={cls.products__title}>Продукты <RightArrowIcon /></h2>
                <ul className={cls.products__list}>
                    {
                        Array(6).fill(null).map((_, index) => (
                            <li key={index}>
                                <ProductCard
                                    title='Granit'
                                    image='/product.png'
                                />
                            </li>
                        ))
                    }
                </ul>
                <Link href='/products'>
                    <GrayButton className={cls.products__btn}>подробнее о продуктах</GrayButton>
                </Link>
            </Container>
        </section>
    );
}

export default Products;
