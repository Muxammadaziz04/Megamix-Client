import Image from 'next/image';
import BreadCrumbs from 'components/UI/BreadCrumbs';
import Container from 'components/UI/Container';
import parseTimestamp from 'utils/parceTimestamp';
import { breadCrumbs } from './data';
import cls from './SingleNews.module.scss'
import { useRouter } from 'next/router';

const SingleNewsPage = ({ news = {
    title: '',
    description: '',
    image: '',
    createdAt: ''
} }) => {
    const router = useRouter()
    const { data, month, year, hours, minutes } = parseTimestamp(news?.createdAt, router.locale)

    return (
        <div itemScope itemType='http://schema.org/ImageObject'>
            <div className={cls.news}>
                <Container>
                    <BreadCrumbs title='Пресс-релиз' breadCrumbs={[...breadCrumbs, { label: news?.title }]} />
                    <h1 className={cls.news__title} itemProp='name'>{news?.title}</h1>
                    <span className={cls.news__date} itemProp='datePublished'>{data} {month} {year}  |  {hours}:{minutes}</span>
                </Container>
            </div>
            <div className={cls.news__body}>
                <Container className={cls.news__body__container}>
                    <div className={cls.news__body__image}>
                        <Image
                            itemProp='contentUrl'
                            src={news?.image}
                            layout='fill'
                            objectFit='cover'
                            alt={news?.title}
                        />
                    </div>
                    <p className={cls.news__body__desc} itemProp='description'>{news?.description}</p>
                </Container>
            </div>
        </div>
    );
}

export default SingleNewsPage;
