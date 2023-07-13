import cls from './Input.module.scss'

const Input = ({
    type = 'text',
    placeholder = ''
}) => {
    return (
        <input 
            className={cls.input}
            type={type}
            placeholder={placeholder}
        />
    );
}

export default Input;
