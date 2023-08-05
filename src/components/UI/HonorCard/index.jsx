import Image from 'next/image';
import cls from './HonorCard.module.scss'

const HonorCard = ({
    title = '',
    description = '',
    image = ''
}) => {
    return (
        <li className={cls.card}>
            <h2 className={cls.card__title}>{title}</h2>
            <p className={cls.card__desc}>{description}</p>
            <div className={cls.card__img}>
                <Image 
                    src={image}
                    layout='fill'
                    objectFit='contain'
                    alt={title}
                />
            </div>
        </li>
    );
}

export default HonorCard;
