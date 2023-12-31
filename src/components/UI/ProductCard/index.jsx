import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import GrayButton from '../Buttons/GrayButton';
import { PlayIcon } from '../icons';
import cls from './ProductCard.module.scss'

const ProductCard = ({
    title = '',
    image = '',
    link = '/',
    description = '',
    align = 'flex-start',
    video = false
}) => {
    const { t } = useTranslation()

    return (
        <li>
            <Link href={link}>
                <a className={cls.card}>
                    <div className={cls.card__info} style={{ alignSelf: align }}>
                        <h3 style={{ 'textAlign': align }}>{title}</h3>
                        {video && <GrayButton><PlayIcon /> {t('видео инструкция')}</GrayButton>}
                    </div>
                    <div className={cls.card__image}>
                        <Image
                            src={image}
                            objectFit='contain'
                            layout='fill'
                            // placeholder='blur'
                            priority
                            alt={`Megamix ${title}`}
                        />
                    </div>
                    {description && <p className={cls.card__desc}>{description}</p>}
                </a>
            </Link>
        </li>
    );
}

export default ProductCard;
