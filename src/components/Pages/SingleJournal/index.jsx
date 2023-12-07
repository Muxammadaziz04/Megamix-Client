import BreadCrumbs from 'components/UI/BreadCrumbs';
import Container from 'components/UI/Container';
import { breadCrumbs, journal } from './data';
import { useRouter } from 'next/router';
import cls from './SingleJournal.module.scss'
import Image from 'next/image';

const SingleJournal = ({ }) => {
    const router = useRouter()

    return (
        <div>
            <div className={cls.news}>
                <Container>
                    <BreadCrumbs title='Пресс-релиз' breadCrumbs={breadCrumbs} />
                    <h1 className={cls.news__title}>{journal?.[router?.locale]?.title || 'Презентационный каталог 2023-2024'}</h1>
                    <span className={cls.news__subtitle}>{journal?.[router.locale]?.subtitle || 'Обращение совета директоров компании'}</span>
                </Container>
            </div>
            <div className={cls.news__body}>
                <Container className={cls.news__body__container}>
                    <p className={cls.news__body__desc} dangerouslySetInnerHTML={{
                        __html: journal?.[router.locale]?.description1 || journal?.ru?.description1
                    }}></p>
                    <div className={cls.news__buildings}>
                        <div>
                            <Image
                                src='/images/building_1.png'
                                layout='fill'
                                objectFit='cover'
                                alt='image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/building_2.png'
                                layout='fill'
                                objectFit='cover'
                                alt='image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/building_3.png'
                                layout='fill'
                                objectFit='cover'
                                alt='image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/building_4.png'
                                layout='fill'
                                objectFit='cover'
                                alt='image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/building_5.png'
                                layout='fill'
                                objectFit='cover'
                                alt='image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/building_6.png'
                                layout='fill'
                                objectFit='cover'
                                alt='image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/building_7.png'
                                layout='fill'
                                objectFit='cover'
                                alt='image'
                            />
                        </div>
                    </div>
                    <p className={cls.news__body__desc} dangerouslySetInnerHTML={{
                        __html: journal?.[router.locale]?.description2 || journal?.ru?.description2
                    }}></p>
                    <div className={cls.news__images}>
                        <div>
                            <Image
                                src='/images/factory_1.png'
                                layout='fill'
                                objectFit='cover'
                                alt='Image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/factory_2.png'
                                layout='fill'
                                objectFit='cover'
                                alt='Image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/factory_3.png'
                                layout='fill'
                                objectFit='cover'
                                alt='Image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/factory_4.png'
                                layout='fill'
                                objectFit='cover'
                                alt='Image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/factory_5.png'
                                layout='fill'
                                objectFit='cover'
                                alt='Image'
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/factory_6.png'
                                layout='fill'
                                objectFit='cover'
                                alt='Image'
                            />
                        </div>
                    </div>
                    <p className={cls.news__body__desc} dangerouslySetInnerHTML={{
                        __html: journal?.[router.locale]?.description3 || journal?.ru?.description3
                    }}></p>
                </Container>
            </div>
        </div>
    );
}

export default SingleJournal;
