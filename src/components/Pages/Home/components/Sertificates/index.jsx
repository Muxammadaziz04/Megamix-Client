import Container from 'components/UI/Container';
import SertificateCard from 'components/UI/SertificateCard';
import Image from 'next/image';
import cls from './Sertificates.module.scss'

const Sertificates = () => {
    return (
        <section className={cls.sertificates}>
            <Container className={cls.sertificates__container}>
                <h2 className={cls.sertificates__title}>Сертификаты, Награды</h2>
                <ul className={cls.sertificates__block}>
                    <SertificateCard />
                    <SertificateCard />
                    <SertificateCard />
                </ul>
            </Container>
        </section>
    );
}

export default Sertificates;
