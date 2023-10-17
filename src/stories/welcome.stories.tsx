import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Welcome from '../components/Steps/Welcome/Welcome';
import { StepDataType } from '../utils/data/stepsData';

const AadharStory = {
    title: 'ReactComponentLibrary/Welcome'
} as ComponentMeta<typeof Welcome>;

export default AadharStory;

const Template: ComponentStory<typeof Welcome> = () => {
    const stepData: StepDataType = {
        id: 1,
        name: 'Welcome',
        label: 'Welcome',
        isSkipable: false,
        isRequired: false,
        isVisible: false,
        stepStatus: 0,
        primaryCTAText: 'Start Onboarding',
        description: '',
        form_data: {}
    };
    const handleStepDataSubmit = (data: any) => {
        console.log('HandleWlcStepData', data);
    };

    return <Welcome stepData={stepData} handleSubmit={handleStepDataSubmit} isDisabledCTA={false} />;
};

export const WelcomeScreen = Template.bind({});
