import ReactInputMask from "react-input-mask";
import { Controller } from "react-hook-form";
import cls from './MaskInput.module.scss'

const MaskInput = ({
    placeholder = '',
    mask = '',
    name = '',
    rules,
    control,
}) => {
    return control ? (
        <Controller
            name={name}
            defaultValue=''
            control={control}
            rules={rules}
            render={({ field }) => (
                <ReactInputMask
                    className={cls.input}
                    placeholder={placeholder}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    mask={mask}
                />
            )}
        />
    ) : (
        <ReactInputMask
            className={cls.input}
            placeholder={placeholder}
            mask={mask}
        />
    );
}

export default MaskInput;