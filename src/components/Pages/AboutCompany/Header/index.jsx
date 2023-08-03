import Container from 'components/UI/Container';
import cls from './Header.module.scss'

const Header = () => {
    return (
        <div className={cls.header}>
            <Container>
                <h2 className={cls.header__title}>Мегамикс, в котором воплощены секреты производства</h2>
            </Container>
        </div>
    );
}

export default Header;
