import BreadCrumbs from 'components/UI/BreadCrumbs';
import Container from 'components/UI/Container';
import Image from 'next/image';
import { useState } from 'react';
import { breadCrumbs } from './data';
import cls from './SingleProduct.module.scss'

const SingleProductPage = () => {
    const [activeTab, setActiveTab] = useState(1)

    function resizeInput(e) {
        e.target.style.width = (e.target.value?.length + 2) + "ch";
    }

    return (
        <div className={cls.product}>
            <Container className={cls.product__container}>
                <BreadCrumbs title='Mono Stop' breadCrumbs={breadCrumbs} />
                <div className={cls.product__info}>
                    <div>
                        <div className={cls.product__info__block}>
                            <div>
                                <div className={cls.product__info__block__img}>
                                    <Image
                                        src='/images/product.png'
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                            <div className={cls.product__info__block__calc}>
                                <div className={cls.product__info__block__calc__result}>
                                    <span>6 кг</span>
                                    <span>3 литр вода</span>
                                </div>
                                <div className={cls.product__info__block__calc__inputs}>
                                    <div>
                                        <div>
                                            Слой
                                            <label>
                                                <input 
                                                    type="number" 
                                                    defaultValue={0} 
                                                    onChange={resizeInput} 
                                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                                />
                                                см
                                            </label>
                                        </div>
                                        <div>
                                            Объём
                                            <label>
                                                <input 
                                                    type="text" 
                                                    defaultValue={0}
                                                    onChange={resizeInput} 
                                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                                />
                                                кв²
                                            </label>
                                        </div>
                                    </div>
                                    <span>Вы можете изменить цифры</span>
                                </div>
                            </div>
                        </div>
                        <video src="/video.mp4" controls></video>
                    </div>
                    <div className={cls.product__info__desc}>
                        <h1>Mono Stop</h1>
                        <span>25 кг</span>
                        <ul>
                            <li className={activeTab === 1 ? cls.active : ''} onClick={() => setActiveTab(1)}>Опиания</li>
                            <li className={activeTab === 2 ? cls.active : ''} onClick={() => setActiveTab(2)}>Технические характеристики</li> 
                            <li className={activeTab === 3 ? cls.active : ''} onClick={() => setActiveTab(3)}>Упаковка</li>
                        </ul>
                        <p>Гидроизоляционная сухая смесь, изготавливается на цементном вяжущем с различными добавками, применяется на поверхность бетона, монолитного бетона и других покрытий стен, полов. Используется в качестве водонепроницаемого слоя на стяжку, штукатурку, в наружных стенах подвального помещения, в подпорных стенах, резервуарах для воды, в помещениях с влажным режимом . Можно наносить в несколько слоев (один слой не более 3 мм). Обеспечивает легкое и быстрое применение, не создает усадок и трещин.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SingleProductPage;
