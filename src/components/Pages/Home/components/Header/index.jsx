import Container from 'components/UI/Container';
import { CoatingsIcon, DryMixesIcon, GlueIcon, PaintsIcon } from 'components/UI/icons';
import { useTranslation } from 'next-i18next';
import CategoryCard from '../CategoryCard';
import cls from './Header.module.scss'

const getIconFromCtgId = (id) => {
    switch (id) {
        case '45eeeec8-7ec5-4463-939d-e2a94dd30c1c': return <DryMixesIcon />;
        case '94cc257e-cf79-4326-9c98-96e283d756cf': return <PaintsIcon />;
        case '6127e6b4-e60f-4c96-b442-f27b9bfa4a92': return <CoatingsIcon />;
        case 'a5d4242-cfd1-4ce9-8294-da0fc4dc8156': return <GlueIcon />;
        default: return <DryMixesIcon />;
    }
}

const Header = ({ categories = [] }) => {
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
                    {
                        categories?.length > 0 && categories.map(ctg => (
                            <CategoryCard
                                key={ctg.id} 
                                icon={getIconFromCtgId(ctg.id)} 
                                name={ctg.name} 
                            />
                        ))
                    }
                    {/* <CategoryCard icon={<PaintsIcon />} name='Краски' />*/}
                </div>
            </Container>
        </header>
    );
}

export default Header;
