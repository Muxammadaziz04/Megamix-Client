import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import NewsCard from 'components/UI/NewsCard';
import { breadCrumbs, categories } from './data';
import cls from './News.module.scss'

const NewsPage = () => {
    return (
        <div className={cls.news}>
            <Container className={cls.news__container}>
                <BreadCrumbs title='Новости' breadCrumbs={breadCrumbs} />
                <Categories categories={categories} />
                <ul className={cls.news__list}>
                    <NewsCard image='/images/news.png' title='Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Giving information on its origins, as well as a random Lipsum generator.' />
                    <NewsCard image='/images/news.png' title='Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Giving information on its origins, as well as a random Lipsum generator.' />
                    <NewsCard image='/images/news.png' title='Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Giving information on its origins, as well as a random Lipsum generator.' />
                    <NewsCard image='/images/news.png' title='Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Giving information on its origins, as well as a random Lipsum generator.' />
                </ul>
            </Container>
        </div>
    );
}

export default NewsPage;
