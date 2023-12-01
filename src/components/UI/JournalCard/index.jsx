import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './JournalCard.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const JournalCard = ({
    images = [],
    descriptions = []
}) => {
    const { t } = useTranslation()

    return (
        <div className={cls.journal}>
            <div className={cls.journal__image}>
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
                        images?.length > 0 && images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className={cls.journal__image}>
                                    <Image
                                        src={image}
                                        layout='fill'
                                        objectFit='cover'
                                        alt='journal'
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
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
                                        <h3 className={cls.journal__info__title}>{t(desc?.title)}</h3>
                                        <p className={cls.journal__info__desc}>{t(desc?.desc)}</p>
                                        <Link href='/press-release/journal/single'><a>{t('Читать журнал')}</a></Link>
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