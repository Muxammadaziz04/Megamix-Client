import { Pagination } from 'antd';
import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import ProductCard from 'components/UI/ProductCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { breadCrumbs } from './data';
import cls from './Products.module.scss'


const ProductsPage = ({ categories = [] }) => {
    const router = useRouter()

    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return (
                <Link href={`?id=${router?.query?.id}&page=${Math.max(current - 1, 1)}`}>
                    <a>{'<'}</a>
                </Link>
            )
        } else if (type === 'next') {
            return (
                <Link href={`?id=${router?.query?.id}&page=${Math.min(current + 1, Math.ceil(50 / 6))}`}>
                    <a>{'>'}</a>
                </Link>
            )
        } else {
            return (
                <Link href={`?id=${router?.query?.id}&page=${current}`}>
                <a>{current}</a>
            </Link>
        )
    }
    }
    return (
        <div className={cls.products}>
            <Container className={cls.products__container}>
                <BreadCrumbs title='Продукты' breadCrumbs={breadCrumbs} />
                <Categories categories={categories?.map(ctg => ({ label: ctg.name, link: `/products?id=${ctg.id}` }))} />
                <ul className={cls.products__list}>
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                </ul>
                <Pagination
                    total={50}
                    pageSize={6}
                    current={Number(router?.query?.page) || 1}
                    itemRender={itemRender}
                    responsive
                />
            </Container>
        </div>
    );
}

export default ProductsPage;
