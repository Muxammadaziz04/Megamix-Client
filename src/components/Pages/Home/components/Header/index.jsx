import Container from 'components/UI/Container';
import { CoatingsIcon, DryMixesIcon, GlueIcon, PaintsIcon } from 'components/UI/icons';
import CategoryCard from '../CategoryCard';
import cls from './Header.module.scss'

const Header = () => {
    return (
        <header className={cls.header}>
            <video
                autoPlay={true}
                loop={true}
                src="https://media.istockphoto.com/id/1350848523/video/sun-shining-over-business-center-from-morning-to-evening-time-lapse-modern-downtown.mp4?s=mp4-640x640-is&k=20&c=FnjWo-wI1b_AHKO-GpFLRt3fltzTqp48u-KMaRRpw60="
            >
            </video>
            <Container className={cls.header__container}>
                <div className={cls.header__text}>
                    <h2>Без сомнений...</h2>
                    <p>Гарантия качества напротяжении всегосрока службы.</p>
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
