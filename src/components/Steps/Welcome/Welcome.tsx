import React from 'react';
import WelcomeIcon from '../../../assets/icons/welcomeIcon.png';
import { useStore } from '../../../store/zustand';
import ButtonGlobal from '../../Common/ButtonGlobal';
import { StepDataType } from '../../../utils/data/stepsData';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';

type WelcomeProps = {
    stepData: StepDataType;
};
const Welcome = ({ stepData, handleSubmit }: GlobalStepPropsType) => {
    const { steps, currentStep, setCompleted, setCurrentStepPlus } = useStore();
    return (
        <div className="w-full min-h-[80vh] min-h-[85%] flex items-center justify-center bg-white rounded-2xl">
            <div className="items-center text-center text-black">
                <img src={String(WelcomeIcon)} alt="welcome icon" className="flex items-center text-center h-48 w-48 h-52 w-52 mr-auto ml-auto mt-auto mb-6 mb-6" />
                <b className="text-[24px]">Welcome!</b>
                <p className="sm:font-normal text-[18px] pt-2 pl-4 pr-4">
                    <span className="sm:block">Happy to see you here. Lets start your onboarding journey.</span>
                    <span className="sm:block"> We ensure, you&apos;ll be assisted at every step.</span>
                </p>
                <ButtonGlobal
                    className="bg-primary bg-black text-white font-bold mt-6 mt-8 py-2 px-8 rounded"
                    // onClick={() => {
                    //     currentStep === steps.length + 1 ? setCompleted(true) : (setCurrentStepPlus(), setStepsStatus([...stepsStatus, { progress: 'In Progress', step: currentStep + 1 }]));
                    // }}
                    onClick={() => handleSubmit({ ...stepData, stepStatus: 3 })}
                >
                    {currentStep === steps.length + 1 ? 'Done' : stepData?.primaryCTAText}
                </ButtonGlobal>
            </div>
        </div>
    );
};

export default Welcome;
