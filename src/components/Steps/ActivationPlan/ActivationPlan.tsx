import React, { useEffect, useState } from 'react';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';
import ButtonGlobal from '../../Common/ButtonGlobal';
import Labelglobal from '../../Common/Labelglobal';
import InputGlobal from '../../Common/InputGlobal';

const ActivationPlan = ({ stepData, handleSubmit, isDisabledCTA, handleStepCallBack }: GlobalStepPropsType) => {
    const [consentData, setConsentData] = useState('');
    const { label, description, isSkipable, primaryCTAText } = stepData;
    const handleActivationPlan = () => {
        // for storybook demo
        handleSubmit({ ...stepData });
        // handleSubmit({ ...stepData, form_data: { is_consent: 'Y', consent_text: consentText, name: consentData }, stepStatus: 3 });
    };
    const handleSkip = () => {
        handleSubmit({ ...stepData, stepStatus: 2 });
    };
    useEffect(() => {
        if (typeof handleStepCallBack === 'function') handleStepCallBack({ type: stepData.id, method: 'getInitialActivationPlan' });
    }, []);
    return (
        <div className="pt-8 sm:p-8">
            <div className="text-[22px] font-[500] sm:font-[400]">{label}</div>
            <div className="mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]">{description}</div>
            <div className="mt-10 relative"></div>
            <span className={`flex flex-col items-center sm:block`}>
                <div></div>
                <ButtonGlobal className="bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]" onClick={handleActivationPlan} disabled={isDisabledCTA}>
                    {isDisabledCTA ? 'Please wait...' : primaryCTAText}
                </ButtonGlobal>

                {isSkipable && (
                    <ButtonGlobal className="font-semibold sm:ml-10 mt-6" onClick={handleSkip}>
                        Skip this step
                    </ButtonGlobal>
                )}
            </span>
        </div>
    );
};

export default ActivationPlan;
