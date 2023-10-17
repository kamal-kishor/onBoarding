import React from 'react';
import UseGeoLocation from '../CustomHooks/UseGeoLocation';

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

const ButtonGlobal = ({ className, children, onClick, disabled, setCapturelocationData, getLocation, type, id }: BtnProps) => {
    const hndlCapturLoction = () => {
        const location = UseGeoLocation();
        setCapturelocationData?.(location);
    };

    if (getLocation === true) {
        hndlCapturLoction();
    }

    return (
        <button className={className} id={id} onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
    );
};

export default ButtonGlobal;
