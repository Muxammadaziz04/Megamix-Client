import Container from '../Container';
import { GetterLogo } from '../icons';
import { socialMediaLinks } from './data';
import cls from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <Container className={cls.footer__container}>
                <span className={cls.footer__copyright}>Copyright {new Date().getFullYear()}</span>
                <div className={cls.footer__info}>
                    <ul className={cls.footer__info__list}>
                        {socialMediaLinks.map(link => (
                            <li key={link.id}>
                                <a href={link.link} target='_blank'>{link.icon}</a>
                            </li>
                        ))}
                    </ul>
                    <span className={cls.footer__info__developed}>
                        Developed by:
                        <a href="https://getter.uz" target='_blank'>
                            <GetterLogo />
                        </a>
                    </span>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
