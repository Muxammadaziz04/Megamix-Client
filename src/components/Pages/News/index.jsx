import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import NewsCard from 'components/UI/NewsCard';
import { breadCrumbs, categories } from './data';
import cls from './News.module.scss'

const NewsPage = ({news = []}) => {
    return (
        <div className={cls.news}>
            <Container className={cls.news__container}>
                <BreadCrumbs title='Новости' breadCrumbs={breadCrumbs} />
                <Categories categories={categories} />
                <ul className={cls.news__list}>
                    {
                        news?.length > 0 && news?.map(news => (
                            <NewsCard 
                                key={news?.id}
                                image={news?.image} 
                                title={news?.description}
                                link={`/press-release/news/${news?.id}`}
                            />
                        ))
                    }
                </ul>
            </Container>
        </div>
    );
}

export default NewsPage;
