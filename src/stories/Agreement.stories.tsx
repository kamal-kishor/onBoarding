import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SignAgreement from '../components/Steps/Agreement/SignAgreement';
import { StepDataType } from '../utils/data/stepsData';

const AadharStory = {
    title: 'ReactComponentLibrary/SignAgreement'
} as ComponentMeta<typeof SignAgreement>;

export default AadharStory;

const Template: ComponentStory<typeof SignAgreement> = () => {
    const stepData: StepDataType = {
        id: 12,
        name: 'Sign Agreement',
        label: 'Sign Agreement',
        isSkipable: false,
        isRequired: true,
        isVisible: true,
        stepStatus: 0,
        role: 12800,
        primaryCTAText: 'Sign Agreement',
        description: '',
        form_data: {},
        success_message: 'Agreement signed successfully.'
    };
    const handleStepDataSubmit = (data: any) => {
        console.log('HandleWlcStepData', data);
    };

    return <SignAgreement stepData={stepData} handleSubmit={handleStepDataSubmit} isDisabledCTA={false} />;
};

export const Agreement = Template.bind({});
