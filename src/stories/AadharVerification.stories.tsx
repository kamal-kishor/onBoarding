import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AdharVerifiction from '../components/Steps/AadharSteps/AdharVerifiction';
import { StepDataType } from '../utils/data/stepsData';

const AadharStory = {
    title: 'ReactComponentLibrary/AdharVerifiction'
} as ComponentMeta<typeof AdharVerifiction>;

export default AadharStory;

const Template: ComponentStory<typeof AdharVerifiction> = () => {
    const stepData: StepDataType = {
        id: 4,
        name: 'AadhaarVerification',
        label: 'Aadhaar Verification',
        isSkipable: false,
        isRequired: true,
        isVisible: true,
        stepStatus: 0,
        role: 12400,
        primaryCTAText: 'Verify Aadhaar',
        description: 'Upload your Aadhaar Copy front and back to verify yourself. Accepted formats are',
        form_data: {},
        success_message: 'Aadhaar uploaded successfully.'
    };
    const handleStepDataSubmit = (data: any) => {
        console.log('HandleWlcStepData', data);
    };

    return <AdharVerifiction stepData={stepData} handleSubmit={handleStepDataSubmit} isDisabledCTA={false} />;
};

export const AadharVerifiction = Template.bind({});
