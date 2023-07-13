import cls from './Container.module.scss'

const Container = ({
    className = '',
    children
}) => {
    return (
        <div className={`${cls.container} ${className}`}>
            {children}
        </div>
    );
}

export default Container;