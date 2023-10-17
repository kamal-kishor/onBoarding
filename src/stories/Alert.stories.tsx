import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from '../../src/components/Common/Alert';

export default {
    title: 'ReactComponentLibrary/Alert',
    component: Alert
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = () => <Alert />;

export const AlertStory = Template.bind({});
