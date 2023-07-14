import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Container from 'components/UI/Container';
import { SliderLeftArrow, SliderRightArrow } from 'components/UI/icons';
import NewsCard from 'components/UI/NewsCard';
import cls from './News.module.scss'

import 'swiper/css';

const News = () => {
    const [swiper, setSwiper] = useState()

    return (
        <section className={cls.news}>
            <Container className={cls.news__container}>
                <div className={cls.news__block}>
                    <h3 className={cls.news__title}>Наши новости</h3>
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
                slidesPerView={1.65}
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
