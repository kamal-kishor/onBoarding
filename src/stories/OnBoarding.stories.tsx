import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StepDataType } from '../../src/utils/data/stepsData';
import OnboardingWidget from '../components/OnboardingWidget/OnboardingWidget';

const selectionStepData: StepDataType = {
    id: 0,
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
                isVisible: true,
                user_type: [
                    { key: 3, name: 'I Merchant' },
                    { key: 2, name: 'Merchant' }
                ]
            },
            {
                id: 2,
                merchant_type: 3,
                applicant_type: 2,
                label: "I'm a distributor",
                description: 'I have a network of seller and i want to serve them',
                icon: '../assets/icons/user_distributor.png',
                isVisible: true,
                user_type: [{ key: 1, name: 'Distributor' }]
            },
            {
                id: 3,
                merchant_type: 2,
                applicant_type: 1,
                label: "I'm a Enterprise",
                description: 'I want to use API and other solution to make my own service',
                icon: '../assets/icons/user_enterprise.png',
                isVisible: false,
                user_type: [{ key: 23, name: 'Partner' }]
            }
        ]
    }
};

const stepperData: StepDataType = {
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

const userData: any = { name: 'kamal' };

const handleStepDataSubmit = (data: any) => {
    console.log('HandleWlcStepData', data);
};

const stateTypes: Array<any> = [{ label: 'Andhra Pradesh' }, { label: 'Assam' }, { label: 'Arunachal Pradesh' }, { label: 'Bihar' }, { label: 'Chhattisgarh' }];

const handleStepCallBack = () => ({ type: stepData.id, method: 'getBookletNumber' });

const shopTypes: Array<any> = [{ value: 'Shop Value' }, { label: 'Shop Label' }];

export default {
    title: 'CompleteOnBoardingWidget/Home',
    component: OnboardingWidget
} as ComponentMeta<typeof OnboardingWidget>;

const Template: ComponentStory<typeof OnboardingWidget> = (args) => <OnboardingWidget {...args} />;

export const OnbordingStory = Template.bind({});
OnbordingStory.args = {
    defaultStep: '12400',
    isBranding: false,
    userData: { userData },
    handleSubmit: { handleStepDataSubmit },
    stepResponse: true,
    selectedMerchantType: 2,
    shopTypes: { shopTypes },
    stateTypes: { stateTypes },
    stepsData: { stepperData },
    handleStepCallBack: { handleStepCallBack }
};
