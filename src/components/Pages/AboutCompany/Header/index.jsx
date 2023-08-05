import Container from 'components/UI/Container';
import { useTranslation } from 'next-i18next';
import cls from './Header.module.scss'

const Header = () => {
    const {t} = useTranslation('about')
    return (
        <div className={cls.header}>
            <Container>
                <h2 className={cls.header__title}>{t('Мегамикс, в котором воплощены секреты производства')}</h2>
            </Container>
        </div>
    );
}

export default Header;
