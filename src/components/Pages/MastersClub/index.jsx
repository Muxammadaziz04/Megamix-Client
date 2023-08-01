import ClubCard from 'components/UI/ClubCard';
import Container from 'components/UI/Container';
import cls from './MastersClub.module.scss'

const MastersClubPage = () => {
    return (
        <div className={cls.body}>
            <Container className={cls.body__container}>
                <ClubCard title='Зубчатый шпатель' desc='зубчатый шпатель(гребенку) для укладки плитки' image='/images/product.png' />
                <ClubCard title='Зубчатый шпатель' desc='зубчатый шпатель(гребенку) для укладки плитки' image='/images/product.png' />
                <ClubCard title='Зубчатый шпатель' desc='зубчатый шпатель(гребенку) для укладки плитки' image='/images/product.png' />
                <ClubCard title='Зубчатый шпатель' desc='зубчатый шпатель(гребенку) для укладки плитки' image='/images/product.png' />
                <ClubCard title='Зубчатый шпатель' desc='зубчатый шпатель(гребенку) для укладки плитки' image='/images/product.png' />
            </Container>
        </div>
    );
}

export default MastersClubPage;
