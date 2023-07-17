import BreadCrumbs from 'components/UI/BreadCrumbs';
import Container from 'components/UI/Container';
import SertificateCard from 'components/UI/SertificateCard';
import { breadCrumbs } from './data';
import cls from './Sertificates.module.scss'

const SertificatesPage = () => {
    return (
        <div className={cls.sertificates}>
            <Container className={cls.sertificates__container}>
                <BreadCrumbs title='Сертификаты' breadCrumbs={breadCrumbs} />
                <h1 className={cls.sertificates__title}>Сертификаты</h1>
                <ul className={cls.sertificates__list}>
                    <SertificateCard />
                    <SertificateCard />
                    <SertificateCard />
                    <SertificateCard />
                    <SertificateCard />
                </ul>
            </Container>
        </div>
    );
}

export default SertificatesPage;
