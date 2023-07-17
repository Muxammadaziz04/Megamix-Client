import { useState } from 'react';
import Image from 'next/image';
import ImageViewer from 'react-simple-image-viewer'
import BreadCrumbs from 'components/UI/BreadCrumbs';
import Categories from 'components/UI/Categories';
import Container from 'components/UI/Container';
import { breadCrumbs, categories } from './data';
import cls from './SingleGallery.module.scss'

const images = Array(14).fill('/images/gallery.png')

const SingleGalleryPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = (index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className={cls.gallery}>
            <Container className={cls.gallery__container}>
                <BreadCrumbs title='Фото галерея' breadCrumbs={breadCrumbs} />
                <Categories categories={categories} />
                <h1 className={cls.gallery__title}>MEGAMIX на 5-й международной выставке строительства и мебели BuildExpo Uzbekistan 2010</h1>
                <ul className={cls.gallery__list}>
                    {
                        images.map((img, index) => (
                            <li key={index} onClick={() => openImageViewer(index)}>
                                <Image
                                    src={img}
                                    layout='fill'
                                    objectFit='cover'
                                    alt='image'
                                />
                            </li>
                        ))
                    }
                </ul>
                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                    />
                )}
            </Container>
        </div>
    );
}

export default SingleGalleryPage;
