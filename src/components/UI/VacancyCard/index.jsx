import cls from './VacancyCard.module.scss'

const VacancyCard = () => {
    return (
        <li className={cls.card}>
            <h2>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</h2>
            <span>1000$ - 1500$</span>
        </li>
    );
}

export default VacancyCard;
