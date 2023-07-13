import Image from 'next/image';
import Link from 'next/link';
import RoundedButton from '../Buttons/RoundedButton';
import { Logo } from '../icons';
import cls from './NewsCard.module.scss'

const NewsCard = ({
    link = '/',
    image = '',
    title = ''
}) => {
    return (
        <div className={cls.news}>
            <div className={cls.news__image}>
                <Image
                    src={image}
                    layout='fill'
                    objectFit='cover'
                    alt={title}
                />
            </div>
            <div className={cls.news__block}>
                <Logo />
                <h4 className={cls.news__title}>{title}</h4>
                <Link href={link}>
                    <RoundedButton className={cls.news__btn}>Подробнее</RoundedButton>
                </Link>
            </div>
        </div>
    );
}

export default NewsCard;
