import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AadhaarNumberOtpVerify from '../components/Steps/AadharSteps/AadharNumberOtpVerify';
import { StepDataType } from '../utils/data/stepsData';

const AadharStory = {
    title: 'ReactComponentLibrary/AadhaarNumberOtpVerify'
} as ComponentMeta<typeof AadhaarNumberOtpVerify>;

export default AadharStory;

const Template: ComponentStory<typeof AadhaarNumberOtpVerify> = () => {
    const stepData: StepDataType = {
        id: 7,
        name: 'ConfirmAadhaarOTP',
        label: 'Confirm Aadhaar OTP',
        isSkipable: false,
        isRequired: true,
        isVisible: true,
        stepStatus: 0,
        role: 24000,
        primaryCTAText: 'Confirm',
        description: '',
        form_data: {},
        success_message: 'Aadhaar confirmed successfully.'
    };
    const handleStepDataSubmit = (data: any) => {
        console.log('HandleWlcStepData', data);
    };

    return <AadhaarNumberOtpVerify stepData={stepData} handleSubmit={handleStepDataSubmit} isDisabledCTA={false} />;
};

export const AadharOTP = Template.bind({});
