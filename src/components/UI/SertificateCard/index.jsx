import Image from 'next/image';
import cls from './SertificateCard.module.scss'

const SertificateCard = () => {
    return (
        <li className={cls.card}>
            <div>
                <Image
                    src='/images/sertificate.png'
                    layout='fill'
                    objectFit='cover'
                    alt='sertificate'
                />
            </div>
        </li>
    );
}

export default SertificateCard;
