import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './JournalCard.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const JournalCard = ({
    image = '',
    descriptions = []
}) => {
    return (
        <div className={cls.journal}>
            <div className={cls.journal__image}>
                <Image
                    src={image}
                    layout='fill'
                    objectFit='cover'
                    alt='journal'
                />
            </div>
            <div>
                {descriptions?.length > 0 && (
                    <Swiper
                        speed={600}
                        loop
                        autoplay={{ delay: 3500 }}
                        modules={[Autoplay, Pagination]}
                        pagination={true}
                        slidesPerView={1}
                        centeredSlides
                        allowTouchMove={false}
                    >
                        {
                            descriptions.map((desc, index) => (
                                <SwiperSlide key={index}>
                                    <div className={cls.journal__info}>
                                        <h3 className={cls.journal__info__title}>{desc?.title}</h3>
                                        <p className={cls.journal__info__desc}>{desc?.desc}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )}
            </div>
        </div>
    );
}

export default JournalCard;