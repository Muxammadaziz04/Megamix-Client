import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import FotoGallery from 'components/UI/FotoGalleryCard';
import { breadCrumbs, categories } from './data';
import cls from './FotoGallery.module.scss'

const FotoGalleryPage = () => {
    return (
        <div className={cls.foto}>
            <Container className={cls.foto__container}>
                <BreadCrumbs title='Фото галерея' breadCrumbs={breadCrumbs} />
                <Categories categories={categories} />
                <ul className={cls.foto__list}>
                    <FotoGallery />
                    <FotoGallery />
                    <FotoGallery />
                    <FotoGallery />
                    <FotoGallery />
                </ul>
            </Container>
        </div>
    );
}

export default FotoGalleryPage;
