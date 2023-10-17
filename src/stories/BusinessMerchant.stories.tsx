import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BusinessMerchant from '../components/Steps/Business/BusinessMerchant';
import { StepDataType } from '../utils/data/stepsData';

const AadharStory = {
    title: 'ReactComponentLibrary/BusinessMerchant'
} as ComponentMeta<typeof BusinessMerchant>;

export default AadharStory;

const Template: ComponentStory<typeof BusinessMerchant> = () => {
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

    const stateTypes = [{ label: 'Andhra Pradesh' }, { label: 'Assam' }, { label: 'Arunachal Pradesh' }, { label: 'Bihar' }, { label: 'Chhattisgarh' }];

    return <BusinessMerchant stepData={stepData} handleSubmit={handleStepDataSubmit} stateTypes={stateTypes} isDisabledCTA={false} />;
};

export const BussinessMerchants = Template.bind({});
