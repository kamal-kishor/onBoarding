import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PanAdharMatch from '../components/Steps/PanSteps/PanAdharMatch';
import { StepDataType } from '../utils/data/stepsData';

const AadharStory = {
    title: 'ReactComponentLibrary/PanAdharMatch'
} as ComponentMeta<typeof PanAdharMatch>;

export default AadharStory;

const Template: ComponentStory<typeof PanAdharMatch> = () => {
    return <PanAdharMatch />;
};

export const MatchPanAadhar = Template.bind({});
