import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import { categories } from '../AboutCompany/data';
import Header from '../AboutCompany/Header';
import cls from './Factory.module.scss'

const FactoryPage = () => {
    return (
        <>
            <Header />
            <Container className={cls.about}>
                <Categories categories={categories} />
                <h2>Мегамикс, в котором воплощены секреты производства</h2>
                <p>С целью достижений стратегий производства, мы постоянно изучаем новейшие технологии, спрос и ожидания потребителей, используя при этом весь потенциал предприятия и способности каждого сотрудника.Вся продукция «MEGAMIX» производится на основе передовых технологий, с использованием высококачественного сырья и материалов. Оснащенная современным оборудованием лаборатория предприятия тщательно на систематической основе ведет жесткий контроль, как применяемого сырья, так и производимой продукции. Перед тем как выпустить на рынок готовую продукцию, каждое наименование товара проходит строгий схематический контроль качества.</p>
            </Container>
        </>
    );
}

export default FactoryPage;
