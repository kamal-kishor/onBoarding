export type InputProps = {
    type: string;
    id: string;
    className: string;
    placeholder: string;
    value?: any;
    name?: string;
    onChange?: any;
    maxLength?: any;
    minLength?: any;
    max?: any;
    props?: any;
};
declare const InputGlobal: ({ type, id, className, placeholder, onChange, value, name, maxLength, max, minLength, ...props }: InputProps) => JSX.Element;
export default InputGlobal;
