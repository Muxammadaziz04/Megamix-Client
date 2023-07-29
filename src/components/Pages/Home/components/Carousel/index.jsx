import Container from 'components/UI/Container';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './Carousel.module.scss'

const Carousel = () => {
    return (
        <section>
            <Container>
                <Swiper
                    speed={600}
                    autoplay={{ delay: 2500 }}
                    modules={[Autoplay, Pagination]}
                    centeredSlides
                    slidesPerView={1}
                    pagination={true}
                >
                    <SwiperSlide>
                        <div style={{ position: 'relative' }}>
                            {/* <h3 className={cls.carousel__title}>Разные полезные ссылки</h3> */}
                            <div className={cls.carousel}>
                                <Image
                                    src={'/images/slider.jpg'}
                                    layout="fill"
                                    objectFit='cover'
                                    alt='image'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ position: 'relative' }}>
                            {/* <h3 className={cls.carousel__title}>Разные полезные ссылки</h3> */}
                            <div className={cls.carousel}>
                                <Image
                                    src={'/images/slider.jpg'}
                                    layout="fill"
                                    objectFit='cover'
                                    alt='image'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    );
}

export default Carousel;
