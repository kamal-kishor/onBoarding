import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from '../../src/components/Common/Modal';

export default {
    title: 'ReactComponentLibrary/Modal',
    component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalStory = Template.bind({});
ModalStory.args = {
    showModal: true,
    setShowModal: () => {},
    handleOnclick: () => {},
    attentionmsg: (
        <>
            Are you sure you want to upload this Aadhaar. You will <br /> get only one attempt for Aadhaar verification.
        </>
    )
};
