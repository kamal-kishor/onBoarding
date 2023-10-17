import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SecretPin from '../../src/components/Steps/PIN/SecretPin';
import { StepDataType } from '../utils/data/stepsData';

const Pin = {
    title: 'ReactComponentLibrary/SecretPin'
} as ComponentMeta<typeof SecretPin>;

export default Pin;

const Template: ComponentStory<typeof SecretPin> = () => {
    const stepData: StepDataType = {
        id: 9,
        name: 'BusinessDetails',
        label: 'Business Details',
        isSkipable: false,
        isRequired: true,
        isVisible: true,
        stepStatus: 0,
        role: 13300,
        primaryCTAText: 'Next',
        description: '',
        form_data: {}
    };
    const handleStepDataSubmit = (data: any) => {
        console.log('HandleWlcStepData', data);
    };
    const handleStepCallBack = (data: any) => {
        console.log('handleStepCallBack', data);
    };

    return <SecretPin stepData={stepData} handleSubmit={handleStepDataSubmit} isDisabledCTA={false} handleStepCallBack={handleStepCallBack} />;
};

export const PinStory = Template.bind({});
