import Image from 'next/image';
import cls from './HonorCard.module.scss'

const HonorCard = () => {
    return (
        <li className={cls.card}>
            <h2 className={cls.card__title}>Kalite Yonetim Sistemi belgisi</h2>
            <p className={cls.card__desc}>Quality Management System Cartificate EK/ANNEX</p>
            <div className={cls.card__img}>
                <Image 
                    src='/images/honor.png'
                    layout='fill'
                    objectFit='contain'
                    alt='Megamix honors'
                />
            </div>
        </li>
    );
}

export default HonorCard;
