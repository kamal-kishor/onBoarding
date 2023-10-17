import React from 'react';
import thumb from '../../../assets/icons/thumb.svg';
import retry from '../../../assets/icons/retry.png';
import ButtonGlobal from '../../Common/ButtonGlobal';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';

const OnboardingStatus = ({ stepData, handleSubmit }: GlobalStepPropsType) => {
    const onbordingClick = () => {
        // for storybook demo
        handleSubmit({ ...stepData });
        console.log('hello');
        // handleStepCallBack({ type: stepData.id, method: 'legalityOpen' });
    };
    return (
        <>
            <div className="flex mt-8">
                <span className="w-[20%] sm:w-fit">
                    <span className="ounded-[100%] w-[16vw] h-[16vw] w-16 h-16 flex items-center justify-center border-2 border-success">
                        <img src={thumb} alt="thump up icon" className="w-[35px] h-[35px] sm:w-7 sm:h-7" />
                    </span>
                </span>
                <span className="flex flex-col ml-5">
                    <span className="text-lg font-semibold text-success">64% Completed</span>
                    <div className="mt-1 text-md">4 Steps completed, 1 step skipped, 1 step disqualified</div>
                    <span className="hidden sm:flex mt-8 items-center justify-between w-[80%]">
                        <span className="flex-col">
                            <div className="text-sm text-darkdefault">Skipped</div>
                            <div className="text-md text-black font-bold">Aadhaar Verification</div>
                        </span>
                        <ButtonGlobal className="flex items-center justify-center bg-primary bg-black text-white font-semibold w-28 h-8 px-5 rounded" onClick={onbordingClick}>
                            <>
                                <img src={retry} alt="retry_icon" className="w-4 h-4 mr-2" /> Retry
                            </>
                        </ButtonGlobal>
                    </span>
                    <span className="hidden flex mt-8 mb-4 items-center justify-between w-[60%]">
                        <span className="flex-col">
                            <span className="text-sm text-darkdefault">Disqualified</span>
                            <div className="text-md text-black font-bold">Video KYC</div>
                        </span>
                        <div className="w-fit rounded-full p-2 text-xs text-center text-red bg-white border-red border-2">No Attempts Left</div>
                    </span>
                </span>
            </div>
            <div className="sm:hidden border-2 border-lightdefault rounded-2xl mt-6">
                <span className="flex items-center justify-between w-[100%] border-b-2 border-lightdefault p-5">
                    <span className="flex-col">
                        <div className="text-md text-darkdefault">Skipped</div>
                        <div className="text-md text-black font-bold">Aadhaar Verification</div>
                    </span>
                    <ButtonGlobal className="flex items-center justify-center bg-primary bg-black text-white font-[400] w-28 h-8 px-2 rounded text-[18px] py-5">
                        <>
                            <img src={retry} alt="retry_icon" className="w-4 h-4 mr-2" /> Retry
                        </>
                    </ButtonGlobal>
                </span>
                <span className="sm:hidden flex p-5 items-center justify-between w-[100%]">
                    <span className="flex-col">
                        <span className="text-md text-darkdefault">Disqualified</span>
                        <div className="text-md text-black font-bold">Video KYC</div>
                    </span>
                    <div className="w-fit rounded-full py-2 px-5 text-[14px] text-center text-red bg-white border-red border-2">No Attempts Left</div>
                </span>
            </div>
        </>
    );
};

export default OnboardingStatus;
