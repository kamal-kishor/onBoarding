import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Labelglobal, { LabelProps } from '../../src/components/Common/Labelglobal';

export default {
    title: 'ReactComponentLibrary/Labelglobal',
    component: Labelglobal
} as ComponentMeta<typeof Labelglobal>;

const Template: ComponentStory<typeof Labelglobal> = () => {
    return <Labelglobal className="text-gray-600" children="Default Label Text" />;
};

export const LabelStory = Template.bind({});
