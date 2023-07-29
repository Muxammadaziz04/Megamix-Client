import Image from 'next/image';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import cls from './LanguageModal.module.scss'

const LanguageModal = () => {
    const router = useRouter()
    
    const changeLocale = (locale) => {
        setCookie(null, 'locale', locale, {
            path: '/',
            maxAge: 30 * 24 * 60 * 60
        })
        router.push({
            route: router.pathname,
            query: router.query
        }, router.asPath, { locale });
    }

    return (
        <ul className={cls.lang__modal}>
            <li 
                onClick={() => changeLocale('uz')}
                className={router.locale === 'uz' ? cls.active : ''}
            >
                <Image
                    src='/icons/uzb.png'
                    width={18}
                    height={12}
                    layout='fixed'
                    objectFit='cover'
                    quality={100}
                />
                O'zbekcha
            </li>
            <li 
                onClick={() => changeLocale('ru')}
                className={router.locale === 'ru' ? cls.active : ''}
            >
                <Image
                    src='/icons/russ.png'
                    width={18}
                    height={12}
                    layout='fixed'
                    objectFit='cover'
                    quality={100}
                />
                Русский
            </li>
            <li 
                onClick={() => changeLocale('en')}
                className={router.locale === 'en' ? cls.active : ''}
            >
                <Image
                    src='/icons/eng.png'
                    width={18}
                    height={12}
                    layout='fixed'
                    objectFit='cover'
                    quality={100}
                />
                English
            </li>
            <li 
                onClick={() => changeLocale('tr')}
                className={router.locale === 'tr' ? cls.active : ''}
            >
                <Image
                    src='/icons/tr.png'
                    width={18}
                    height={12}
                    layout='fixed'
                    objectFit='cover'
                    quality={100}
                />
                Türkçe
            </li>
            <li 
                onClick={() => changeLocale('tj')}
                className={router.locale === 'tj' ? cls.active : ''}
            >
                <Image
                    src='/icons/tj.png'
                    width={18}
                    height={12}
                    layout='fixed'
                    objectFit='cover'
                    quality={100}
                />
                Тоҷикӣ
            </li>
        </ul>
    );
}

export default LanguageModal;
