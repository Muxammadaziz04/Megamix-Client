import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import RoundedButton from '../Buttons/RoundedButton';
import { Logo } from '../icons';
import cls from './NewsCard.module.scss'

const NewsCard = ({
    link = '/',
    image = '',
    title = ''
}) => {
    const { t } = useTranslation()

    return (
        <li className={cls.news}>
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
                    <RoundedButton className={cls.news__btn}>{t('Подробнее')}</RoundedButton>
                </Link>
            </div>
        </li>
    );
}

export default NewsCard;
