import React, { useState } from 'react';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';
import ButtonGlobal from '../../Common/ButtonGlobal';
import { useStore } from '../../../store/zustand';
const SignAgreement = ({ stepData, handleSubmit, isDisabledCTA = false, handleStepCallBack }: GlobalStepPropsType) => {
    const { steps, currentStep, setCompleted, setCurrentStepPlus } = useStore();
    const [leegalityLoaded, setLeegalityLoaded] = useState<boolean>(false);

    React.useEffect(() => {
        // if (typeof handleStepCallBack === 'function') handleStepCallBack({ type: stepData.id, method: 'getSignUrl' });
    }, []);

    const openPopupTab = () => {
        // for storybook demo
        handleSubmit({ ...stepData });
        // handleStepCallBack({ type: stepData.id, method: 'legalityOpen' });
    };

    const link = 'https://karzatechnologies.sandbox.leegality.com/sign/1f1b1fdd-a903-44f7-a2fc-84653bdf9829';

    return (
        <div className="w-full min-h-[80vh] sm:min-h-[85%] flex items-center justify-center bg-white rounded-2xl">
            <div className="items-center text-center text-black">
                <img src="https://files.eko.co.in/docs/onborading/agreement.png" alt="welcome icon" className="flex items-center text-center h-48 w-48 h-52 w-52 mr-auto ml-auto mt-auto mb-6 mb-6" />
                <p className="sm:font-normal text-[18px] pt-2 pl-4 pr-4">
                    <span className="sm:block">Happy to see you here. Lets start your onboarding journey.</span>
                    <span className="sm:block"> We ensure, you&apos;ll be assisted at every step.</span>
                </p>
                <ButtonGlobal className="bg-primary bg-black text-white font-bold mt-6 mt-8 py-2 px-8 rounded" disabled={isDisabledCTA} onClick={openPopupTab}>
                    {isDisabledCTA ? 'Loading...' : stepData?.primaryCTAText}
                </ButtonGlobal>
            </div>
        </div>
    );
};

export default SignAgreement;
