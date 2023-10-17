import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OnboardingWidget } from '../components/OnboardingWidget';
import { DistributorStepsData, sellerStepsData } from '../utils/data/stepsData';

const HomeStory = {
    title: 'ReactComponentLibrary/OnboardingWidget'
} as ComponentMeta<typeof OnboardingWidget>;

export default HomeStory;

const handleStepDataSubmit = (data: any) => {
    console.log('HandleWlcStepData', data);
};
const Template: ComponentStory<typeof OnboardingWidget> = () => (
    <OnboardingWidget stepsData={DistributorStepsData} userData="1" defaultStep="12200" isBranding={false} handleSubmit={handleStepDataSubmit} selectedMerchantType="1" />
);
export const homepage = Template.bind({});
