import Link from 'next/link';
import { useState } from 'react';
import copy from 'copy-to-clipboard';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import RoundedButton from '../Buttons/RoundedButton';
import Container from '../Container';
import Input from '../Form/Input';
import MaskInput from '../Form/MaskInput';
import { CopiedIcon, CopyIcon, PhoneIcon, RightIcon } from '../icons';
import ContactMap from '../Map';
import { navLinks, phoneNumbers } from './data';
import cls from './FeedbackSection.module.scss'

const location = 'Республика Узбекистана, г. Ташкент, пр. Бунёдкор, 57Б'

const FeedbackSection = () => {
    const { t } = useTranslation()
    const { control } = useForm()
    const [copied, setCopied] = useState(false)

    const copyLocation = () => {
        copy(location)
        setCopied(true)
    }

    return (
        <section className={cls.feedback} id='contacts'>
            <Container className={cls.feedback__container}>
                <div className={cls.feedback__block}>
                    <form className={cls.feedback__form}>
                        <h4 className={cls.feedback__form__title}>{t('Обратная связь')}</h4>
                        <Input placeholder={t('Ваше имя')} />
                        <MaskInput
                            mask='+\9\9\8 (99) 999-99-99'
                            placeholder="+998"
                            control={control}
                            name="phone"
                            rules={{ required: true }}
                        />
                        <RoundedButton type='submit'>{t('отправить')} <RightIcon /></RoundedButton>
                    </form>
                    <div className={cls.feedback__map}>
                        <h4 className={cls.feedback__map__location}>{t(location)}</h4>
                        <button
                            className={cls.feedback__map__copy}
                            onClick={copyLocation}
                        >
                            {copied ? <CopiedIcon /> : <CopyIcon />}
                            {copied ? t('Скопировано') : t('Копировать')}
                        </button>
                        <ContactMap />
                    </div>
                </div>
                <div className={cls.feedback__block}>
                    <ul className={cls.feedback__linklist}>
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <Link href={link.link}>
                                    <a>{t(link.label)}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={cls.feedback__numbers}>
                        <PhoneIcon />
                        {phoneNumbers.map(number => (
                            <a href={number.link} key={number.id}>{number.label}</a>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default FeedbackSection;
