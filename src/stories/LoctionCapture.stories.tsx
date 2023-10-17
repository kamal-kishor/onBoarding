import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoctionCapture from '../components/Steps/Location/LoctionCapture';
import { StepDataType } from '../utils/data/stepsData';

const AadharStory = {
    title: 'ReactComponentLibrary/LoctionCapture'
} as ComponentMeta<typeof LoctionCapture>;

export default AadharStory;

const Template: ComponentStory<typeof LoctionCapture> = () => {
    const stepData: StepDataType = {
        id: 3,
        name: 'LocationCapture',
        label: 'Location Capturing',
        isSkipable: false,
        isRequired: true,
        isVisible: true,
        stepStatus: 0,
        role: 12400,
        primaryCTAText: 'Start Location Capture',
        description: '',
        form_data: {},
        success_message: 'Location captured successfully.'
    };
    const handleStepDataSubmit = (data: any) => {
        console.log('HandleWlcStepData', data);
    };

    return <LoctionCapture stepData={stepData} handleSubmit={handleStepDataSubmit} isDisabledCTA={false} />;
};

export const LocationAccess = Template.bind({});
