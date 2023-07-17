import Image from "next/image";
import Link from "next/link";
import cls from './FotoGalleryCard.module.scss'

const FotoGallery = () => {
    return (
        <li className={cls.card}>
            <Link href='/'>
                <a>
                    <div className={cls.card__image}>
                        <Image
                            src='/images/foto-gallery.png'
                            layout="fill"
                            objectFit="cover"
                            alt="Megamix foto gallery"
                        />
                    </div>
                    <div className={cls.card__desc}>
                        <h2>MEGAMIX на 5-й международной выставке строительства и мебели BuildExpo Uzbekistan 2010</h2>
                    </div>
                </a>
            </Link>
        </li>
    );
}

export default FotoGallery;
