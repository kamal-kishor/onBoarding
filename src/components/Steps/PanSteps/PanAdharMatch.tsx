import React from 'react';
import thumb from '../../../assets/icons/thumb.svg';
import thumpdown from '../../../assets/icons/thumpdown.svg';
import { useStore } from '../../../store/zustand';

const PanAdharMatch = () => {
    const { panStatus = 1, panStatusResult } = useStore();

    return (
        <>
            {panStatus === 0 ? (
                <ul className="pt-2 pl-5 text-[16px] font-[300]">
                    <li className="pb-2">Please click the button below to start matching your details.</li>
                    <li className="pb-2">It is required to for verification purpose.</li>
                    <li className="pb-2">Minimum match requirement is 60%</li>
                </ul>
            ) : panStatusResult === 'Matching Failed' ? (
                <div className="flex mt-4">
                    <span className="w-[20%] sm:w-fit">
                        <span className="rounded-[100%] w-[16vw] h-[16vw] w-16 h-16 border-2 flex justify-center items-center border-success">
                            <img src={thumb} alt="tumpup icon" className="w-[35px] h-[35px] sm:w-7 sm:h-7" />
                        </span>
                    </span>
                    <span className="ml-3">
                        <span className="text-lg font-semibold text-success">Good match</span>
                        <div className="mt-1 font-[400] text-[18px] sm:text-md">
                            Your name, PAN and Aadhaar matches by <span className="font-bold text-lg">70%</span>
                        </div>
                    </span>
                </div>
            ) : (
                <div className="flex mt-4">
                    <span className="w-[20%] sm:w-fit">
                        <span className="rounded-[100%] w-[16vw] h-[16vw] w-16 h-16 border-2 flex justify-center items-center border-red">
                            <img src={thumpdown} alt="tumpdown icon" className="w-[32px] h-[32px] sm:w-7 sm:h-7" />
                        </span>
                    </span>
                    <span className="ml-3 sm:ml-5">
                        <span className="text-lg font-[500] text-red">Matching Failed</span>
                        <div className="mt-1 font-[400] text-[18px] sm:text-md">
                            Your name, PAN and Aadhaar matches by <span className="font-bold text-lg">30%</span>
                        </div>
                        <div className="text-red block sm:hidden mt-2">You have 1 attempt left</div>
                    </span>
                </div>
            )}
        </>
    );
};

export default PanAdharMatch;
