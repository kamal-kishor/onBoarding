import React from 'react';

export type LabelProps = {
    className: string;
    children?: JSX.Element | string;
};
const Labelglobal = ({ className, children }: LabelProps) => {
    return <label className={className}>{children}</label>;
};

export default Labelglobal;
