import { Pagination } from 'antd';
import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import ProductCard from 'components/UI/ProductCard';
import { breadCrumbs } from './data';
import cls from './Products.module.scss'

const ProductsPage = ({ categories = [] }) => {
    return (
        <div className={cls.products}>
            <Container className={cls.products__container}>
                <BreadCrumbs title='Продукты' breadCrumbs={breadCrumbs} />
                <Categories categories={categories?.map(ctg => ({label: ctg.name, link: `/products?id=${ctg.id}`}))} />
                <ul className={cls.products__list}>
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                    <ProductCard link='/products/d' title='Granit' image='/images/product.png' description='Клей облицовочный для печей и каминов' align='center' />
                </ul>
                <Pagination pageSize={6} total={50} />
            </Container>
        </div>
    );
}

export default ProductsPage;
