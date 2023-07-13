import Image from "next/image";
import Marquee from "react-fast-marquee";
import Container from "../Container";
import cls from './Partners.module.scss'

const Partners = () => {
    return (
        <section className={cls.partners}>
            <Container>
                <h3 className={cls.partners__title}>Партнеры</h3>
            </Container>
            <Marquee
                autoFill
                gradient
            >
                <div className={cls.partners__image}>
                    <div>
                        <Image
                            src={'/partner.png'}
                            layout="fill"
                            objectFit="contain"
                            alt="Megamix partner"
                        />
                    </div>
                </div>
                <div className={cls.partners__image}>
                    <div>
                        <Image
                            src={'/partner2.png'}
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
