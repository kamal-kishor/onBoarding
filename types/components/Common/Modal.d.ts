import React from 'react';
type ModalProps = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleOnclick?: () => void;
    attentionmsg?: any;
};
declare const Modal: ({ showModal, setShowModal, handleOnclick, attentionmsg }: ModalProps) => JSX.Element;
export default Modal;
