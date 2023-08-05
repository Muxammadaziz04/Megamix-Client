import BreadCrumbs from 'components/UI/BreadCrumbs';
import Container from 'components/UI/Container';
import HonorCard from 'components/UI/HonorCard';
import honors from 'constants/honors.constants';
import { useTranslation } from 'next-i18next';
import { breadCrumbs } from './data';
import cls from './Honors.module.scss'

const HonorsPage = () => {
    const { t } = useTranslation()

    return (
        <div className={cls.honors}>
            <Container className={cls.honors__container}>
                <BreadCrumbs title={t('Награды')} breadCrumbs={breadCrumbs} />
                <h1 className={cls.honors__title}>{t('Награды')}</h1>
                <ul className={cls.honors__list}>
                    {
                        honors?.length > 0 && honors.map(honor => (
                            <HonorCard
                                key={honor?.id}
                                title={honor?.title}
                                description={honor?.description}
                                image={honor?.image}
                            />
                        ))
                    }
                </ul>
            </Container>
        </div>
    );
}

export default HonorsPage;
