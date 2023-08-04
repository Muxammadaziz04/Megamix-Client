import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import VideoCard from 'components/UI/VideoCard';
import { breadCrumbs, categories } from './data';
import cls from './VideoGallery.module.scss'

const VideoGalleryPage = ({ videos = [] }) => {
    return (
        <div className={cls.video}>
            <Container className={cls.video__container}>
                <BreadCrumbs title='Видео галерея' breadCrumbs={breadCrumbs} />
                <Categories categories={categories} />
                <ul className={cls.video__list}>
                    {
                        videos?.length > 0 && videos?.map(video => (
                            <VideoCard 
                                key={video?.id}
                                title={video?.description}
                                video={video?.video}
                            />
                        ))
                    }
                </ul>
            </Container>
        </div>
    );
}

export default VideoGalleryPage;
