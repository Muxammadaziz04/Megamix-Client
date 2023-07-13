import Image from 'next/image';
import Link from 'next/link';
import GrayButton from '../Buttons/GrayButton';
import { PlayIcon } from '../icons';
import cls from './ProductCard.module.scss'

const ProductCard = ({
    title = '',
    image = '',
    link = '/'
}) => {
    return (
        <Link href={link}>
            <a className={cls.card}>
                <div className={cls.card__info}>
                    <h3>{title}</h3>
                    <GrayButton><PlayIcon /> видео инструкция</GrayButton>
                </div>
                <div className={cls.card__image}>
                    <Image
                        src={image}
                        objectFit='contain'
                        layout='fill'
                        alt={`Megamix ${title}`}
                    />
                </div>
            </a>
        </Link>
    );
}

export default ProductCard;
