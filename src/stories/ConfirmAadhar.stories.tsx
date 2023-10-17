import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConfirmAadhaarNumber from '../components/Steps/AadharSteps/ConfirmAadharNumber';
import { StepDataType } from '../utils/data/stepsData';

const AadharStory = {
    title: 'ReactComponentLibrary/ConfirmAadhaarNumber'
} as ComponentMeta<typeof ConfirmAadhaarNumber>;

export default AadharStory;

const Template: ComponentStory<typeof ConfirmAadhaarNumber> = () => {
    const stepData: StepDataType = {
        id: 6,
        name: 'Confirm Aadhaar Number',
        label: 'Confirm Aadhaar Number',
        isSkipable: false,
        isRequired: true,
        isVisible: true,
        stepStatus: 0,
        role: 24000,
        primaryCTAText: 'Proceed',
        description: '',
        form_data: {},
        success_message: 'Aadhaar number confirmed.'
    };
    const handleStepDataSubmit = (data: any) => {
        console.log('HandleWlcStepData', data);
    };

    return <ConfirmAadhaarNumber stepData={stepData} handleSubmit={handleStepDataSubmit} isDisabledCTA={false} />;
};

export const AadharNumberVrify = Template.bind({});
