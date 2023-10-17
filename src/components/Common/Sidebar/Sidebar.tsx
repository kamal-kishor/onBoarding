import React, { useEffect, useRef } from 'react';
import CompleteMark from '../../../assets/icons/completemark.svg';
import ButtonGlobal from '../ButtonGlobal';
import { useStore } from '../../../store/zustand';
import { StepDataType, stepsData } from '../../../utils/data/stepsData';
import './Sidebar.css';

type StepperProps = {
    steps: Array<StepDataType>;
    userData: any;
};
const Sidebar = ({ steps, userData }: StepperProps) => {
    const { currentStep, completed, setCurrentStepInput } = useStore();
    console.log('currentStep => ', currentStep);
    let visibleStepData = steps;
    console.log('Jalaj Steps', steps, visibleStepData);
    if (userData?.userDetails?.user_type === 3) {
        visibleStepData = visibleStepData?.filter((step) => step.isVisible && step.id !== 10 && step.id !== 9);
    } else {
        visibleStepData = visibleStepData?.filter((step) => step.isVisible);
    }
    const progressRef = useRef<any>(null);
    const currentStepIndex = visibleStepData?.map((step) => step.id)?.indexOf(currentStep);
    useEffect(() => {
        let progress = `0%`;
        if (currentStepIndex + 1 > 1) {
            progress = `${currentStepIndex + 1 * 10}%`;
        }
        if (progressRef?.current) {
            progressRef.current.style.width = progress;
        }
    }, [currentStepIndex]);
    return (
        <div className="w-[75%] sm:w-full sm:rounded-2xl bg-white">
            <div className="px-5 pt-5 p-5 bg-primary rounded-t-2xl">
                <div className="flex-col">
                    <div className="mb-2 text-base text-white">ONBOARDING PROGRESS</div>
                    <div className="w-[100%] bg-white rounded-full h-[12px] h-2.5 mb-4">
                        <div ref={progressRef} className={`bg-success h-[12px] sm:h-3.0 rounded-full`}></div>
                        <div className="text-[14px] text-xs text-end pt-1 text-white mt-2 mt-1">{currentStepIndex > 1 ? `${currentStepIndex} Steps` : '0 Step'} Completed</div>
                    </div>
                </div>
            </div>
            <div className="pt-4 pl-3 p-5 bg-white rounded-b-2xl  h-full mb-10">
                {visibleStepData?.map((step: StepDataType, i: number) => {
                    return (
                        <span key={step.id} className={`flex flex-col relative w-60 ${currentStep === step.id ? 'active' : ''} ${step.id < currentStep ? 'complete' : ''}`}>
                            <ButtonGlobal
                            // onClick={() => {
                            //     i > 0 && steps[i - 1].stepStatus !== 0 && setCurrentStepInput(steps[i]?.id);
                            // }}
                            >
                                <span className="flex pb-5 items-center">
                                    <span className={`step ${i > 0 && step.id > currentStep ? 'disabled' : ''}`}>
                                        {/* {step.stepStatus !== 3 ? i + 1 : <img src={CompleteMark} alt="complete mark" className="w-[15px] h-[11px]" />} */}
                                        {step.id >= currentStep ? i + 1 : <img src={CompleteMark} alt="complete mark" className="w-[15px] h-[15px]" />}
                                    </span>
                                    <span>
                                        <p className={`text-black ml-2 pb-2 pr-2 text-[15.5px] font-[500] font-normal ${i > 0 && steps[i - 1].stepStatus === 0 ? 'disabled' : ''}`}>{step.label}</p>
                                        {step.stepStatus > 1 && step.stepStatus < 3 && (
                                            <div
                                                className={`w-[80px] rounded-full h-[20px] ml-2 text-xs flex justify-center items-center ${
                                                    step.stepStatus === 2 ? 'text-darkdanger bg-white border-darkdanger border-2' : 'text-white bg-warning'
                                                }`}
                                            >
                                                {step.stepStatus === 1 ? 'In Progress' : step.stepStatus === 2 ? 'Skipped' : ''}
                                            </div>
                                        )}
                                    </span>
                                </span>
                            </ButtonGlobal>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
