import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'next-i18next';
import { Autoplay } from 'swiper/modules';
import Container from 'components/UI/Container';
import useWindowWidth from 'hooks/useWindowWidth';
import { SliderLeftArrow, SliderRightArrow } from 'components/UI/icons';
import NewsCard from 'components/UI/NewsCard';
import cls from './News.module.scss'
import 'swiper/css';
import Link from 'next/link';

const News = ({ news = [] }) => {
    const { t } = useTranslation()
    const windowWidth = useWindowWidth()
    const [swiper, setSwiper] = useState()

    return (
        <section className={cls.news}>
            <Container className={cls.news__container}>
                <div className={cls.news__block}>
                    <h2 className={cls.news__title}>
                        <Link href='/press-release/news'>
                            <a>
                                {t('Наши новости')}
                            </a>
                        </Link>
                    </h2>
                    <div className={cls.news__slider__btns}>
                        <button onClick={() => swiper?.slidePrev()}><SliderLeftArrow /></button>
                        <button onClick={() => swiper?.slideNext()}><SliderRightArrow /></button>
                    </div>
                </div>
            </Container>
            <Swiper
                speed={600}
                autoplay={{ delay: 2500 }}
                modules={[Autoplay]}
                centeredSlides
                slidesPerView={windowWidth > 560 ? 1.65 : 1.1}
                onInit={setSwiper}
            >
                <SwiperSlide>
                    <NewsCard
                        image='/images/news.png'
                        title='Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Giving information on its origins, as well as a random Lipsum generator.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsCard
                        image='/images/news.png'
                        title='Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Giving information on its origins, as well as a random Lipsum generator.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsCard
                        image='/images/news.png'
                        title='Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Giving information on its origins, as well as a random Lipsum generator.'
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default News;
