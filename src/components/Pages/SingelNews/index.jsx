import BreadCrumbs from 'components/UI/BreadCrumbs';
import Container from 'components/UI/Container';
import { breadCrumbs } from './data';
import cls from './SingleNews.module.scss'

const SingleNewsPage = () => {
    return (
        <>
            <div className={cls.news}>
                <Container>
                    <BreadCrumbs title='Пресс-релиз' breadCrumbs={breadCrumbs} />
                    <h1 className={cls.news__title}>Ох давно мы не писали о стилях.</h1>
                    <span className={cls.news__date}>10 Июль. 2023  |  10:38</span>
                </Container>
            </div>
            <div className={cls.news__body}>
                
            </div>
        </>
    );
}

export default SingleNewsPage;
