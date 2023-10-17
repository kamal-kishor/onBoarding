import React from 'react';
import oaaslogo from '../../../assets/icons/logo.png';

const Header = () => {
    return (
        <div className="w-full px-5 px-24 h-[56px] z-10 bg-white">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-ceter">
                    <div className="text-sm font-[500] mr-4 sm:text-2lg">
                        <img src={oaaslogo} alt="oaaslogo" className="h-8 w-32" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
