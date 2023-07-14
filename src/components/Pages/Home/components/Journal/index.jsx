import { useRef } from 'react';
import Container from 'components/UI/Container';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './Journal.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Journal = () => {

    return (
        <section className={cls.journal}>
            <Container className={cls.journal__container}>
                <h2 className={cls.journal__title}>Читайте наши журналы и узнавайте о нас больше</h2>

                <div className={cls.journal__item}>
                    <div>
                        <Swiper
                            speed={600}
                            centeredSlides
                            autoplay={{ delay: 3500 }}
                            modules={[Autoplay]}
                            slidesPerView={1}
                            allowTouchMove={false}
                        >
                            <SwiperSlide>
                                <div className={cls.journal__item__image}>
                                    <Image
                                        src='/images/journal.png'
                                        layout='fill'
                                        objectFit='cover'
                                        alt='journal'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={cls.journal__item__image}>
                                    <Image
                                        src='/images/journal.png'
                                        layout='fill'
                                        objectFit='cover'
                                        alt='journal'
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <Swiper
                            speed={600}
                            autoplay={{ delay: 3500 }}
                            modules={[Autoplay, Pagination]}
                            pagination={true}
                            slidesPerView={1}
                            centeredSlides
                            allowTouchMove={false}
                        >
                            <SwiperSlide>
                                <div className={cls.journal__item__info}>
                                    <h3 className={cls.journal__item__info__title}>Темы журнала с короткой описанием</h3>
                                    <p className={cls.journal__item__info__desc}>На протяжении своей деятельности более чем 10 лет «MEGAMIX» накопил богатейший опыт работы в сфере производства строительно-отделочных материалов, и сегодня список ассортимента достиг свыше 40 наименований готовой продукции.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={cls.journal__item__info}>
                                    <h3 className={cls.journal__item__info__title}>Темы журнала с короткой описанием</h3>
                                    <p className={cls.journal__item__info__desc}>На протяжении своей деятельности более чем 10 лет «MEGAMIX» накопил богатейший опыт работы в сфере производства строительно-отделочных материалов, и сегодня список ассортимента достиг свыше 40 наименований готовой продукции.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Journal;
