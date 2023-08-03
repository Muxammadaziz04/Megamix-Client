import Image from 'next/image';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import { CoatingsIcon, DryMixesIcon, GiftIcon, GlueIcon, PaintsIcon } from 'components/UI/icons';
import { useTranslation } from 'next-i18next';
import { categories as navCategories } from '../AboutCompany/data';
import Header from '../AboutCompany/Header';
import CategoryCard from '../Home/components/CategoryCard';
import cls from './Career.module.scss'


const getIconFromCtgId = (id) => {
    switch (id) {
        case '45eeeec8-7ec5-4463-939d-e2a94dd30c1c': return <DryMixesIcon />;
        case '94cc257e-cf79-4326-9c98-96e283d756cf': return <PaintsIcon />;
        case '6127e6b4-e60f-4c96-b442-f27b9bfa4a92': return <CoatingsIcon />;
        case 'a5d4242-cfd1-4ce9-8294-da0fc4dc8156': return <GlueIcon />;
        default: return <DryMixesIcon />;
    }
}

const CareerPage = ({ categories = [] }) => {
    const { t } = useTranslation()

    return (
        <>
            <Header />
            <Container className={cls.container}>
                <Categories categories={navCategories} />
                <div className={cls.career}>
                    <h2>Мегамикс, в котором воплощены секреты производства</h2>
                    <div className={cls.career__image}>
                        <Image
                            src='/images/meet.png'
                            layout='fill'
                            objectFit='cover'
                            alt='group'
                        />
                    </div>
                    <p>С целью достижений стратегий производства, мы постоянно изучаем новейшие технологии, спрос и ожидания потребителей, используя при этом весь потенциал предприятия и способности каждого сотрудника.</p>
                    <p>Вся продукция «MEGAMIX» производится на основе передовых технологий, с использованием высококачественного сырья и материалов. Оснащенная современным оборудованием лаборатория предприятия тщательно на систематической основе ведет жесткий контроль, как применяемого сырья, так и производимой продукции. Перед тем как выпустить на рынок готовую продукцию, каждое наименование товара проходит строгий схематический контроль качества.</p>
                    <div className={cls.career__ctgs}>
                        {
                            categories?.length > 0 && categories.map(ctg => (
                                <CategoryCard
                                    key={ctg.id}
                                    icon={getIconFromCtgId(ctg.id)}
                                    name={ctg.name}
                                    link={`/products?id=${ctg.id}`}
                                />
                            ))
                        }
                        <CategoryCard
                            icon={<GiftIcon />}
                            name={t('Клуб мастеров')}
                            link='/masters-club'
                        />
                    </div>
                    <p>Оснащенная современным оборудованием лаборатория предприятия тщательно на систематической основе ведет жесткий контроль, как применяемого сырья, так и производимой продукции. Перед тем как выпустить на рынок готовую продукцию, каждое наименование товара проходит строгий схематический контроль качества.</p>
                </div>
            </Container>
        </>
    );
}

export default CareerPage;
