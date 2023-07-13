import Container from '../Container';
import { CopyIcon } from '../icons';
import ContactMap from '../Map';
import cls from './FeedbackSection.module.scss'

const location = 'Республика Узбекистана, г. Ташкент, пр. Бунёдкор, 57Б'

const FeedbackSection = () => {
    const copyLocation = () => {
        navigator.clipboard.writeText(location)
    }
    
    return (
        <section className={cls.feedback}>
            <Container className={cls.feedback__container}>
                <div className={cls.feedback__block}>
                    <form>

                    </form>
                    <div className={cls.feedback__map}>
                        <h4 className={cls.feedback__map__location}>{location}</h4>
                        <button className={cls.feedback__map__copy} onClick={copyLocation}><CopyIcon />Копировать</button>
                        <ContactMap />
                    </div>
                </div>
                <div></div>
            </Container>
        </section>
    );
}

export default FeedbackSection;
