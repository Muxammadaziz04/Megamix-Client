import Image from 'next/image';
import cls from './SertificateCard.module.scss'

const SertificateCard = ({
    image = '',
    objectFit = 'cover'
}) => {
    return (
        <li className={cls.card}>
            <div>
                <Image
                    src={image}
                    layout='fill'
                    objectFit={objectFit}
                    alt='sertificate'
                />
            </div>
        </li>
    );
}

export default SertificateCard;
