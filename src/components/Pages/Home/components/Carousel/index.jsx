import Container from 'components/UI/Container';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './Carousel.module.scss'

const sliders = [
    '/sliders/1.png',
    '/sliders/2.png',
]

const Carousel = () => {
    return (
        <section id='home__slider' className={cls?.slider__wrapper}>
            <Container>
                <Swiper
                    speed={600}
                    autoplay={{ delay: 2500 }}
                    modules={[Autoplay, Pagination]}
                    centeredSlides
                    slidesPerView={1}
                    pagination={true}
                >
                    {
                        sliders?.length && sliders.map((slider, index) => (
                            <SwiperSlide key={index}>
                                <div style={{ position: 'relative' }}>
                                    <div className={cls.carousel}>
                                        <Image
                                            priority
                                            src={slider}
                                            layout="fill"
                                            objectFit='cover'
                                            alt='image'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </section>
    );
}

export default Carousel;
