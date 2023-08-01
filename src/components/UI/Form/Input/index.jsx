import cls from './Input.module.scss'

const Input = ({
    type = 'text',
    placeholder = '',
    className = '',
    register = {},
    ...other
}) => {
    return (
        <input 
            className={`${cls.input} ${className}`}
            type={type}
            placeholder={placeholder}
            {...register}
            {...other}
        />
    );
}

export default Input;
