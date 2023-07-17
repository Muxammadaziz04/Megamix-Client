import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import VideoCard from 'components/UI/VideoCard';
import { breadCrumbs, categories } from './data';
import cls from './VideoGallery.module.scss'

const VideoGalleryPage = () => {
    return (
        <div className={cls.video}>
            <Container className={cls.video__container}>
                <BreadCrumbs title='Фото галерея' breadCrumbs={breadCrumbs} />
                <Categories categories={categories} />
                <ul className={cls.video__list}>
                    <VideoCard />
                    <VideoCard />
                </ul>
            </Container>
        </div>
    );
}

export default VideoGalleryPage;
