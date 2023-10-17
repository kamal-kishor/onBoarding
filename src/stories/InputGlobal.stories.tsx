import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import InputGlobal, { InputProps } from '../../src/components/Common/InputGlobal';

export default {
    title: 'ReactComponentLibrary/InputGlobal',
    component: InputGlobal
} as Meta;

const Template: Story<InputProps> = (args) => <InputGlobal {...args} />;

const handleChange = (data: any) => {
    console.log('HandleWlcStepData', data);
};

export const InputStory = Template.bind({});
InputStory.args = {
    type: 'text',
    id: 'exampleInput',
    className: 'input-global',
    placeholder: 'Enter text...',
    onChange: { handleChange }
};
