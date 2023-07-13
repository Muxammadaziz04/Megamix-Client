import Link from 'next/link';
import cls from './CategoryCard.module.scss'

const CategoryCard = ({
    icon = <></>,
    name = '',
    link = '/'
}) => {
    return (
        <Link href={link}>
            <a className={cls.card}>
                {icon}
                {name}
            </a>
        </Link>
    );
}

export default CategoryCard;
