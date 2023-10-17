import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectionScreen } from '../components/Steps/SelectionScreen';
// import { StepDataType } from '../../../utils/globalInterfaces/stepsInterface';
// import { StepDataType } from '../../src/utils/globalInterfaces/stepsInterface';

export default {
    title: 'ReactComponentLibrary/SelectionScreen',
    component: SelectionScreen
} as ComponentMeta<typeof SelectionScreen>;

const handleSubmit = (data: any) => {
    console.log('HandleWlcStepData', data);
};

const stepData: any = {
    id: 2,
    name: 'RoleCapture',
    label: 'Tell us who you are?',
    isSkipable: false,
    isRequired: false,
    isVisible: false,
    stepStatus: 0,
    primaryCTAText: 'Continue',
    description: '',
    form_data: {
        roles: [
            {
                id: 1,
                merchant_type: 1,
                applicant_type: 0,
                label: "I'm a seller",
                description: 'I serve customers from my shop',
                icon: '../assets/icons/user_merchant.png',
                isVisible: true
            },
            {
                id: 2,
                merchant_type: 3,
                applicant_type: 2,
                label: "I'm a distributor",
                description: 'I have a network of seller and i want to serve them',
                icon: '../assets/icons/user_distributor.png',
                isVisible: true
            },
            {
                id: 3,
                merchant_type: 2,
                applicant_type: 1,
                label: "I'm a Enterprise",
                description: 'I want to use API and other solution to make my own service',
                icon: '../assets/icons/user_enterprise.png',
                isVisible: false
            }
        ]
    }
};

const Template: ComponentStory<typeof SelectionScreen> = (args) => <SelectionScreen {...args} />;

export const selectionStory = Template.bind({});
selectionStory.args = {
    stepData,
    isDisabledCTA: false,
    handleSubmit: handleSubmit
};
