import Container from 'components/UI/Container';
import Image from 'next/image';
import cls from './Sertificates.module.scss'

const Sertificates = () => {
    return (
        <section className={cls.sertificates}>
            <Container className={cls.sertificates__container}>
                <h2 className={cls.sertificates__title}>Сертификаты, Награды</h2>
                <div className={cls.sertificates__block}>
                    <div className={cls.sertificates__card}>
                        <div>
                            <Image
                                src='/images/sertificate.png'
                                layout='fill'
                                objectFit='cover'
                                alt='sertificate'
                            />
                        </div>
                    </div>
                    <div className={cls.sertificates__card}>
                        <div>
                            <Image
                                src='/images/sertificate.png'
                                layout='fill'
                                objectFit='cover'
                                alt='sertificate'
                            />
                        </div>
                    </div>
                    <div className={cls.sertificates__card}>
                        <div>
                            <Image
                                src='/images/sertificate.png'
                                layout='fill'
                                objectFit='cover'
                                alt='sertificate'
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Sertificates;
