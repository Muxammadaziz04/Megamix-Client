import useWindowWidth from "hooks/useWindowWidth";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useTranslation } from "next-i18next";
import Container from "../Container";
import cls from './Partners.module.scss'

const partners = [
    '/partners/henkel.png',
    '/partners/shinetsu.jpg',
    '/partners/dow.png',
    '/partners/tronox.png',
    '/partners/fabbrigroup.png', 
    '/partners/sika.png',
    '/partners/hercules.png', 
    '/partners/esen.png', 
    '/partners/bafs.webp'
]

const Partners = () => {
    const { t } = useTranslation()
    const windowWidth = useWindowWidth()

    return (
        <section className={cls.partners} id='partners'>
            <Container>
                <h3 className={cls.partners__title}>{t('Партнёры')}</h3>
            </Container>
            <Marquee
                autoFill
                gradient={windowWidth > 768}
            >
                {
                    partners?.length > 0 && partners?.map((partner, index) => (
                        <div className={cls.partners__image} key={index}>
                            <div>
                                <Image
                                    src={partner}
                                    layout="fill"
                                    objectFit="contain"
                                    alt="Megamix partner"
                                />
                            </div>
                        </div>
                    ))
                }
            </Marquee>
        </section>
    );
}

export default Partners;
