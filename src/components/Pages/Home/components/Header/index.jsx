import Container from 'components/UI/Container';
import { CoatingsIcon, DryMixesIcon, GlueIcon, PaintsIcon } from 'components/UI/icons';
import { useTranslation } from 'next-i18next';
import CategoryCard from '../CategoryCard';
import cls from './Header.module.scss'

const Header = () => {
    const { t } = useTranslation()

    return (
        <header className={cls.header}>
            <video
                muted
                autoPlay
                loop={true}
                src="/video.mp4"
            >
            </video>
            <Container className={cls.header__container}>
                <div className={cls.header__text}>
                    <h2>{t('Без сомнений...')}</h2>
                    <p>{t('Гарантия качества на протяжении всего срока службы.')}</p>
                </div>
                <div className={cls.header__categories}>
                    <CategoryCard icon={<DryMixesIcon />} name='Сухие смеси' />
                    <CategoryCard icon={<PaintsIcon />} name='Краски' />
                    <CategoryCard icon={<CoatingsIcon />} name='Грунтовки' />
                    <CategoryCard icon={<GlueIcon />} name='Клеи' />
                    <CategoryCard icon={<DryMixesIcon />} name='и прочее' />
                </div>
            </Container>
        </header>
    );
}

export default Header;
