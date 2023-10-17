import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AadharConsent from '../components/Steps/AadharSteps/AadharConsent';
import { StepDataType } from '../utils/data/stepsData';

const AadharStory = {
    title: 'ReactComponentLibrary/AadharConsent'
} as ComponentMeta<typeof AadharConsent>;

export default AadharStory;

const Template: ComponentStory<typeof AadharConsent> = () => {
    const stepData: StepDataType = {
        id: 5,
        name: 'Aadhaar Consent',
        label: 'Aadhaar Consent',
        isSkipable: false,
        isRequired: true,
        isVisible: true,
        stepStatus: 0,
        role: 24000,
        primaryCTAText: 'Verify Consent',
        description: '',
        form_data: {},
        success_message: 'Aadhaar consent taken.'
    };
    const handleSubmit = (data: any) => {
        console.log('HandleWlcStepData', data);
    };

    return <AadharConsent stepData={stepData} handleSubmit={handleSubmit} isDisabledCTA={false} />;
};

export const AadharPage = Template.bind({});
