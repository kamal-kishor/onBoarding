import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VideoKYC from '../components/Steps/KYC/VideoKYC';
import { StepDataType } from '../utils/data/stepsData';

const AadharStory = {
    title: 'ReactComponentLibrary/VideoKYC'
} as ComponentMeta<typeof VideoKYC>;

export default AadharStory;

const Template: ComponentStory<typeof VideoKYC> = () => {
    const stepData: StepDataType = {
        id: 11,
        name: 'SelfieKYC',
        label: 'Selfie KYC',
        isSkipable: false,
        isRequired: true,
        isVisible: true,
        stepStatus: 0,
        role: 12500,
        primaryCTAText: 'Next',
        description: 'Thanks for completing your personal and address verification. Take a selfie of 5-10 seconds to complete eKYC process.',
        form_data: {},
        success_message: 'KYC completed.'
    };
    const handleStepDataSubmit = (data: any) => {
        console.log('HandleWlcStepData', data);
    };

    return <VideoKYC stepData={stepData} handleSubmit={handleStepDataSubmit} isDisabledCTA={false} />;
};

export const KYC = Template.bind({});
