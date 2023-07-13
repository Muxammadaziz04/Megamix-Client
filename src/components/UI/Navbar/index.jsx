import Link from 'next/link';
import Container from '../Container';
import { GlobusIcon, Logo, SearchIcon } from '../icons';
import { navbarLinks } from './data';
import cls from './Navbar.module.scss'

const Navbar = () => {

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
                <ul className={cls.nav__list}>
                    {
                        navbarLinks?.map(link => (
                            <li key={link.id}>
                                <Link href={link.link}>
                                    <a>{link.label}</a>
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
                    <button>
                        <GlobusIcon />
                    </button>
                    <div className={cls.nav__group__lang}>
                        Ру
                    </div>
                </div>
            </Container>
            <div>
                <Logo />
            </div>
        </nav>
    );
}

export default Navbar;