import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PanVerification from '../../src/components/Steps/PanSteps/PanVerification';
// import { StepDataType } from '../data/stepsData';
import { StepDataType } from '../../src/utils/data/stepsData';

const PanVerificationStory = {
    title: 'ReactComponentLibrary/PanVerification'
} as ComponentMeta<typeof PanVerification>;

export default PanVerificationStory;

const Template: ComponentStory<typeof PanVerification> = () => {
    const shopTypes = [{ value: 'Shop Value' }, { label: 'Shop Label' }];
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
    const handleSubmit = (value: any) => {
        console.log('PanVerification Status: ', value);
    };

    return <PanVerification handleSubmit={handleSubmit} stepData={stepData} shopTypes={shopTypes} isDisabledCTA={false} />;
};
export const PanVerificationStorys = Template.bind({});
