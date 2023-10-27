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
    packaging = '',
    video = '',
    calcLayerWidth = 0,
    calcVolume = 0,
    calcWaterQuantity = 0,
    calcWeight = 0,
    categoryId = ''
}) => {
    const ref = useRef()
    const volumeRef = useRef()
    const widthRef = useRef()
    const { t } = useTranslation()
    const [width, setWidth] = useState(0)
    const [activeTab, setActiveTab] = useState(1)
    const [result, setResult] = useState({ weight: calcWeight, water: calcWaterQuantity })

    useEffect(() => {
        setWidth(ref?.current?.offsetWidth)
    }, [ref.current])

    function resizeInput(e) {
        e.target.style.width = (e.target.value?.length + 2) + "ch";
    }

    function calculate(e) {
        const width = widthRef.current?.value || 0
        const volume = volumeRef.current?.value || 0
        const dest = (width / calcLayerWidth) * (volume / calcVolume)
        setResult({ weight: (calcWeight * dest).toFixed(1) || 0, water: (calcWaterQuantity * dest).toFixed(1) || 0 })
    }

    return (
        <div className={cls.product}>
            <Container className={cls.product__container}>
                <BreadCrumbs title={title} breadCrumbs={[...breadCrumbs, { label: title }]} />
                <div className={cls.product__info}>
                    <div>
                        <div className={cls.product__info__block}>
                            <div itemScope itemType="http://schema.org/ImageObject">
                                <div className={cls.product__info__block__img}>
                                    <Image
                                        itemProp='contentUrl'
                                        src={image}
                                        layout='fill'
                                        objectFit='contain'
                                        alt={title}
                                    />
                                </div>
                            </div>
                            <div className={cls.product__info__block__calc}>
                                <div className={cls.product__info__block__calc__result}>
                                    <span>{result?.weight} kg</span>
                                    { categoryId === '45eeeec8-7ec5-4463-939d-e2a94dd30c1c' && <span>{result?.water} {t('литра воды')}</span>}
                                </div>
                                <div className={cls.product__info__block__calc__inputs}>
                                    <div>
                                        <div>
                                            {t('Слой')}
                                            <label>
                                                <input
                                                    ref={widthRef}
                                                    type="number"
                                                    defaultValue={calcLayerWidth}
                                                    onChange={resizeInput}
                                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                                    onKeyUp={calculate}
                                                />
                                                {categoryId === '45eeeec8-7ec5-4463-939d-e2a94dd30c1c' && <>sm</>}
                                            </label>
                                        </div>
                                        <div>
                                            {t('Объём')}
                                            <label>
                                                <input
                                                    ref={volumeRef}
                                                    type="number"
                                                    defaultValue={calcVolume}
                                                    onChange={resizeInput}
                                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                                    onKeyUp={calculate}
                                                />
                                                kv²
                                            </label>
                                        </div>
                                    </div>
                                    <span>{t('Вы можете изменить цифры')}</span>
                                </div>
                            </div>
                        </div>
                        {video ? <video src="/video.mp4" controls></video> : <img src='/images/empty_video.png' />}
                    </div>
                    <div className={cls.product__info__desc}>
                        <h1 itemProp='name'>{title}</h1>
                        <span>{weight}</span>
                        <ul>
                            <li className={activeTab === 1 ? cls.active : ''} onClick={() => setActiveTab(1)}>{t('Описание')}</li>
                            <li className={activeTab === 2 ? cls.active : ''} onClick={() => setActiveTab(2)}>{t('Технические характеристики')}</li>
                            <li className={activeTab === 3 ? cls.active : ''} onClick={() => setActiveTab(3)}>{t('Упаковка')}</li>
                        </ul>
                        <div ref={ref}>
                            <div style={{ left: `-${(activeTab - 1) * width}px` }}>
                                <p style={{ maxWidth: `${width}px` }} itemProp='description'>{description}</p>
                                <p style={{ maxWidth: `${width}px` }}>{technicalSpecifications}</p>
                                <p style={{ maxWidth: `${width}px` }}>{packaging}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SingleProductPage;
