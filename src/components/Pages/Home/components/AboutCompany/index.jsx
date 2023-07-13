import RoundedButton from 'components/UI/Buttons/RoundedButton';
import Container from 'components/UI/Container';
import { OrangeBlur, RightIcon } from 'components/UI/icons';
import Image from 'next/image';
import cls from './AboutCompany.module.scss'

const AboutCompany = () => {
    return (
        <section className={cls.about}>
            <Container>
                <h2 className={cls.about__title}>О Компании</h2>
            </Container>
            <div className={cls.about__image}>
                <Container className={cls.about__image__container}>
                    <p>
                        На протяжении своей деятельности более чем 10 лет «MEGAMIX» накопил богатейший опыт работы в сфере производства строительно-отделочных материалов, и сегодня список ассортимента достиг свыше 40 наименований готовой продукции. Это не только стандартные сухие строительные смеси, такие как шпаклевка или штукатурка, но и клеи для керамических, гранитных, мозаичных и т.п. плиток, кладочный раствор, наливной пол, гидроизоляционные материалы, декоративные фасадные покрытия, специальные грунтовки, водоэмульсионные краски, обойные клеи и другие.
                        <OrangeBlur />
                    </p>
                    <RoundedButton>подробнее о компании<RightIcon /></RoundedButton>
                </Container>
            </div>
        </section>
    );
}

export default AboutCompany;
