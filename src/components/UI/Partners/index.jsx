import useWindowWidth from "hooks/useWindowWidth";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Container from "../Container";
import cls from './Partners.module.scss'

const Partners = () => {
    const windowWidth = useWindowWidth()

    return (
        <section className={cls.partners}>
            <Container>
                <h3 className={cls.partners__title}>Партнеры</h3>
            </Container>
            <Marquee
                autoFill
                gradient={windowWidth > 768}
            >
                <div className={cls.partners__image}>
                    <div>
                        <Image
                            src={'/images/partner.png'}
                            layout="fill"
                            objectFit="contain"
                            alt="Megamix partner"
                        />
                    </div>
                </div>
                <div className={cls.partners__image}>
                    <div>
                        <Image
                            src={'/images/partner2.png'}
                            layout="fill"
                            objectFit="contain"
                            alt="Megamix partner"
                        />
                    </div>
                </div>
            </Marquee>
        </section>
    );
}

export default Partners;
