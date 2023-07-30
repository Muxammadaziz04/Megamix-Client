import Container from 'components/UI/Container';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import cls from './Advantages.module.scss'
import { advantages } from './data';

const Advantages = () => {
    const {t} = useTranslation()

    return (
        <section className={cls.advantage}>
            <Container className={cls.advantage__container}>
                <h2 className={cls.advantage__title}>{t('Наше преимущество')}</h2>
                <ul className={cls.advantage__list}>
                    {
                        advantages.map(adv => (
                            <li className={cls.advantage__list__card} key={adv.id}>
                                <div>
                                    <Image 
                                        src={adv.icon}
                                        layout='fill'
                                        objectFit='cover'
                                        alt='icon'
                                    />
                                </div>
                                {t(adv.title)}
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </section>
    );
}

export default Advantages;
