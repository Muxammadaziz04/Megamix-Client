import cls from './VacancyCard.module.scss'

const VacancyCard = ({
    title = '',
    salary = ''
}) => {
    return (
        <li className={cls.card}>
            <h2>{title}</h2>
            <span>{salary}</span>
        </li>
    );
}

export default VacancyCard;
