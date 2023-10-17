import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Uploadfile from '../../src/components/Common/Uploadfile';
import imageicon from '../assets/icons/imageicon.svg';

export default {
    title: 'ReactComponentLibrary/Uploadfile',
    component: Uploadfile
} as ComponentMeta<typeof Uploadfile>;

const Template: ComponentStory<typeof Uploadfile> = (args) => (
    <Uploadfile {...args}>
        <img src={imageicon} alt="Upload Icon" className="w-[18px] h-[18px] mr-2" />
        Browse
    </Uploadfile>
);

export const Default = Template.bind({});
Default.args = {
    type: 'default'
    // handleUpload: (file: File) => {
    //     console.log('Uploaded:', files);
    // }
};

// handleUpload: (files, type, fileData) => {
//     console.log('Uploaded:', files, type, fileData);
// }
