import Image from 'next/image';
import Link from 'next/link';
import cls from './ClubCard.module.scss'

const ClubCard = ({
    link = '/',
    title = '',
    image = '',
    desc = ''
}) => {
    return (
        <Link href={link}>
            <a className={cls.card}>
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
            </a>
        </Link>
    );
}

export default ClubCard;
