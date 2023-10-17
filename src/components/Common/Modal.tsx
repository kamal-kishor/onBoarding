import React from 'react';
import { useStore } from '../../store/zustand';

type ModalProps = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleOnclick?: () => void;
    attentionmsg?: any;
};
const Modal = ({ showModal, setShowModal, handleOnclick, attentionmsg }: ModalProps) => {
    const { setCameraStatus, setManageVeriyStepinital, setFetchData, setSelectedFile, setManageVeriyStepback, setUploadedImage, setPanVerificationfailed, setImage } = useStore();
    const handleproceed = () => {
        setShowModal(false);
        handleOnclick?.();
        setCameraStatus(false);
        setManageVeriyStepinital();
        setFetchData(true);
        setManageVeriyStepback();
        setSelectedFile(undefined);
        setUploadedImage(0);
        setPanVerificationfailed(0);
        setImage(null);
    };
    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center p-6 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none outline-none shadow-lg">
                                {/*header*/}
                                <button
                                    className="flex absolute text-lg -right-2.5 -top-2.5 bg-black text-white outline-none font-medium rounded-full p-2 bg-primary"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="flex absolute text-lg -right-2.5 -top-2.5 bg-black text-white outline-none font-medium rounded-full p-2 bg-sky_spn">×</span>
                                </button>
                                {/*body*/}
                                <div className="flex flex-col justify-center items-center p-5 p-10 text-center">
                                    <div className="text-xl font-[500]">Attention!</div>
                                    <div className="flex flex-col justify-center items-center p-5 p-10 text-center">{attentionmsg}</div>
                                    <div className="mt-6 sm:mt-4">
                                        <button
                                            className="bg-primary text-white bg-black text-[18px] text-[14px] px-8 py-2 rounded outline-none outline-none mr-1 mb-1 ease-linear transition-all duration-150 block inline-block text-center font-[500] font-normal"
                                            onClick={handleproceed}
                                        >
                                            Yes, Proceed
                                        </button>
                                        <button
                                            className="px-[3.5rem] text-[18px] text-[14px] py-2 text-sm outline-none outline-none mr-1 mb-1 ease-linear transition-all duration-150 block inline-block mt-7 mt-0 font-[500] font-normal"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default Modal;
