import Image from 'next/image';
import BreadCrumbs from 'components/UI/BreadCrumbs';
import Container from 'components/UI/Container';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { breadCrumbs } from './data';
import cls from './SingleProduct.module.scss'

const SingleProductPage = ({
    image = '',
    title = '',
    weight = '',
    description = '',
    technicalSpecifications = '',
    packaging = ''
}) => {
    const ref = useRef()
    const {t} = useTranslation()
    const [activeTab, setActiveTab] = useState(1)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(ref?.current?.offsetWidth)
    }, [ref.current])

    function resizeInput(e) {
        e.target.style.width = (e.target.value?.length + 2) + "ch";
    }

    return (
        <div className={cls.product}>
            <Container className={cls.product__container}>
                <BreadCrumbs title={title} breadCrumbs={[...breadCrumbs, { label: title }]} />
                <div className={cls.product__info}>
                    <div>
                        <div className={cls.product__info__block}>
                            <div>
                                <div className={cls.product__info__block__img}>
                                    <Image
                                        src={image}
                                        layout='fill'
                                        objectFit='contain'
                                        alt={title}
                                    />
                                </div>
                            </div>
                            <div className={cls.product__info__block__calc}>
                                <div className={cls.product__info__block__calc__result}>
                                    <span>6 kg</span>
                                    <span>3 {t('литра воды')}</span>
                                </div>
                                <div className={cls.product__info__block__calc__inputs}>
                                    <div>
                                        <div>
                                            {t('Слой')}
                                            <label>
                                                <input
                                                    type="number"
                                                    defaultValue={0}
                                                    onChange={resizeInput}
                                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                                />
                                                sm
                                            </label>
                                        </div>
                                        <div>
                                            {t('Объём')}
                                            <label>
                                                <input
                                                    type="text"
                                                    defaultValue={0}
                                                    onChange={resizeInput}
                                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                                />
                                                kv²
                                            </label>
                                        </div>
                                    </div>
                                    <span>{t('Вы можете изменить цифры')}</span>
                                </div>
                            </div>
                        </div>
                        <video src="/video.mp4" controls></video>
                    </div>
                    <div className={cls.product__info__desc}>
                        <h1>{title}</h1>
                        <span>{weight}</span>
                        <ul>
                            <li className={activeTab === 1 ? cls.active : ''} onClick={() => setActiveTab(1)}>{t('Описание')}</li>
                            <li className={activeTab === 2 ? cls.active : ''} onClick={() => setActiveTab(2)}>{t('Технические характеристики')}</li>
                            <li className={activeTab === 3 ? cls.active : ''} onClick={() => setActiveTab(3)}>{t('Упаковка')}</li>
                        </ul>
                        <div ref={ref}>
                            <div style={{ left: `-${(activeTab - 1) * width}px` }}>
                                <p style={{maxWidth: `${width}px`}}>{description}</p>
                                <p style={{maxWidth: `${width}px`}}>{technicalSpecifications}</p>
                                <p style={{maxWidth: `${width}px`}}>{packaging}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SingleProductPage;
