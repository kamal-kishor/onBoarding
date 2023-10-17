import React from 'react';

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

const InputGlobal = ({ type, id, className, placeholder, onChange, value, name, maxLength, max, minLength, ...props }: InputProps) => {
    const handleChange = (e: any) => {
        if (maxLength) {
            if (e.target.value.length <= maxLength) {
                onChange(e);
            } else if (e.target.value.length >= minLength) {
                onChange();
            }
        } else {
            e.preventDefault();
            onChange(e);
        }
    };
    return (
        <input type={type} id={id} className={className} onChange={handleChange} placeholder={placeholder} value={value} {...props} max={max} name={name} maxLength={maxLength} minLength={minLength} />
    );
};

export default InputGlobal;
