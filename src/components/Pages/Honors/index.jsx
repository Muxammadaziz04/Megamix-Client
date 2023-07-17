import BreadCrumbs from 'components/UI/BreadCrumbs';
import Container from 'components/UI/Container';
import HonorCard from 'components/UI/HonorCard';
import { breadCrumbs } from './data';
import cls from './Honors.module.scss'

const HonorsPage = () => {
    return (
        <div className={cls.honors}>
            <Container className={cls.honors__container}>
                <BreadCrumbs title='Награды' breadCrumbs={breadCrumbs} />
                <h1 className={cls.honors__title}>Награды</h1>
                <ul className={cls.honors__list}>
                    <HonorCard />
                    <HonorCard />
                    <HonorCard />
                    <HonorCard />
                    <HonorCard />
                </ul>
            </Container>
        </div>
    );
}

export default HonorsPage;
