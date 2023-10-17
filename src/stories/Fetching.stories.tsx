import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Fetching from '../../src/components/Common/Fetching';

export default {
    title: 'ReactComponentLibrary/Fetching',
    component: Fetching
} as ComponentMeta<typeof Fetching>;

const handleChange = (data: any) => {
    console.log('HandleWlcStepData', data);
};

const Template: ComponentStory<typeof Fetching> = () => <Fetching />;

export const FetchStory = Template.bind({});
// FetchStory.args = {
//     type: 'text',
//     id: 'exampleInput',
//     className: 'input-global',
//     placeholder: 'Enter text...',
//     onChange: handleChange
// };
