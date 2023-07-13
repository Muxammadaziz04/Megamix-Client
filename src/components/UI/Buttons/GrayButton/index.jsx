import cls from './GrayButton.module.scss'

const GrayButton = ({ children, className = '', ...other }) => {
    return (
        <button className={`${cls.btn} ${className}`} {...other}>{ children }</button>
    );
}

export default GrayButton;
