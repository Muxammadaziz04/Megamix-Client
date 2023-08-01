import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Container from '../Container';
import { GlobusIcon, Logo, SearchIcon } from '../icons';
import LanguageModal from '../LanguageModal';
import { navbarLinks } from './data';
import cls from './Navbar.module.scss'

const Navbar = () => {
    const { t } = useTranslation(['common'])
    const [isOpenBurger, setIsOpenBurger] = useState(null)
    const [isOpenLngModal, setIsOpenLngModal] = useState(false)

    return (
        <nav className={cls.nav}>
            <div>
                <Link href='/'>
                    <a>
                        <Logo />
                    </a>
                </Link>
            </div>
            <Container className={cls.nav__container}>
                <ul className={`${cls.nav__list} ${isOpenBurger === true ? cls.openMenu : ''} ${isOpenBurger === false ? cls.closeMenu : ''}`}>
                    {
                        navbarLinks?.map(link => (
                            <li 
                                key={link.id}
                                onClick={() => isOpenBurger === true && setIsOpenBurger(false)}
                            >
                                <Link href={link.link}>
                                    <a>{t(link.label)}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className={cls.nav__group}>
                    <input
                        className={cls.nav__group__input}
                        type="text"
                        placeholder='поиск'
                        onBlur={e => e.target.classList.add(cls.onBlurInput)}
                    />
                    <button>
                        <SearchIcon />
                    </button>
                    <span></span>
                    <div
                        onClick={() => setIsOpenLngModal(state => !state)}
                        style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', cursor: "pointer" }}
                    >
                        <button>
                            <GlobusIcon />
                        </button>
                        <div className={cls.nav__group__lang}>
                            {t('lang')}
                        </div>
                        {isOpenLngModal && <LanguageModal />}
                    </div>
                </div>

            </Container>
            <button
                className={cls.nav__burger + ' hamburger hamburger--collapse ' + (isOpenBurger ? 'is-active' : '')}
                onClick={() => setIsOpenBurger(state => !state)}
                type="button"
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <div>
                <div style={{width: '138px'}}></div>
            </div>
            <div className={cls.nav__uzor}></div>
        </nav>
    );
}

export default Navbar;