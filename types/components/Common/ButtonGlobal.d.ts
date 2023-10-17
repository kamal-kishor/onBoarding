import React from 'react';
type BtnProps = {
    className?: string;
    onClick?: any;
    children?: JSX.Element | string;
    disabled?: boolean;
    setCapturelocationData?: React.Dispatch<React.SetStateAction<any | null>>;
    getLocation?: boolean;
    type?: any;
    id?: string;
};
declare const ButtonGlobal: ({ className, children, onClick, disabled, setCapturelocationData, getLocation, type, id }: BtnProps) => JSX.Element;
export default ButtonGlobal;
