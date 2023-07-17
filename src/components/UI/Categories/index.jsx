import Link from 'next/link'
import { useRouter } from 'next/router';
import cls from './Categories.module.scss'

const Categories = ({
    categories = []
}) => {
    const router = useRouter()
    return (
        <ul className={cls.categories}>
            {
                categories?.length > 0 && categories.map((ctg, index) => (
                    <li
                        key={index}
                        className={`${cls.categories__item} ${router.asPath.includes(ctg.link) ? cls.active__link : ''}`}
                    >
                        <Link href={ctg.link}>
                            <a>{ctg.label}</a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default Categories;
