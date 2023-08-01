import Image from 'next/image';
import cls from './ClubCard.module.scss'

const ClubCard = ({
    title = '',
    image = '',
    desc = ''
}) => {
    return (
        <div className={cls.card}>
            <div className={cls.card__title}>
                <h4>{title}</h4>
            </div>
            <div className={cls.card__image}>
                <Image
                    src={image}
                    layout='fill'
                    objectFit='cover'
                    alt={title}
                />
            </div>
            <div className={cls.card__desc}>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default ClubCard;
