import Image from "next/image";
import Link from "next/link";
import cls from './FotoGalleryCard.module.scss'

const FotoGallery = ({
    link = '/',
    title = '',
    image = ''
}) => {
    return (
        <li className={cls.card}>
            <Link href={link}>
                <a>
                    <div className={cls.card__image}>
                        <Image
                            src={image}
                            layout="fill"
                            objectFit="cover"
                            alt={title}
                        />
                    </div>
                    <div className={cls.card__desc}>
                        <h2>{title}</h2>
                    </div>
                </a>
            </Link>
        </li>
    );
}

export default FotoGallery;
