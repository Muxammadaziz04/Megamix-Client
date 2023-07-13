import Container from 'components/UI/Container';
import cls from './Advantages.module.scss'
import { advantages } from './data';

const Advantages = () => {
    return (
        <section className={cls.advantage}>
            <Container className={cls.advantage__container}>
                <h2 className={cls.advantage__title}>Наше преимущество</h2>
                <ul className={cls.advantage__list}>
                    {
                        advantages.map(adv => (
                            <li className={cls.advantage__list__card} key={adv.id}>
                                {adv.icon}
                                {adv.title}
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </section>
    );
}

export default Advantages;
