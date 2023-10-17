import React, { useEffect, useState } from 'react';
import { useStore } from '../../../store/zustand';
import ButtonGlobal from '../../Common/ButtonGlobal';
import Modal from '../../Common/Modal';
import retry from '../../../assets/icons/retry.png';
import { StepDataType } from '../../../utils/data/stepsData';

type SupersetComponentProps = {
    pagename: string;
    steps: Array<StepDataType>;
    children?: JSX.Element | string;
    btnName: string;
    tagLine?: string;
    capturelocationData?: any;
    stepsStatus: any;
    setCapturelocationData?: React.Dispatch<React.SetStateAction<any | null>>;
    setStepsStatus: React.Dispatch<React.SetStateAction<any>>;
};
const SupersetComponent = ({ pagename, steps, children, btnName, tagLine, capturelocationData, stepsStatus, setCapturelocationData, setStepsStatus }: SupersetComponentProps) => {
    const {
        currentStep,
        panStatus,
        finish,
        setPanStatusResult,
        setFinish,
        setPanStatus,
        setCurrentStepPlus,
        setCurrentStepInitial,
        setCompleted,
        setStatus,
        manageVeriyStep,
        getLocation,
        setGetlocation,
        setPanVerificationfailed,
        panVerificationfailed,
        setManageVeriyStepback
    } = useStore();
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleStatus = () => {
        setCurrentStepPlus();
        setStatus('Skipped');

        setStepsStatus([...stepsStatus, { progress: 'Skipped', step: currentStep }]);
    };
    const handleStepbtn = () => {
        currentStep === steps.length + 1
            ? setCompleted(true)
            : panStatus === 0 || panStatus === 1 || (panStatus === 2 && finish === false)
            ? currentStep < 8
                ? (setCurrentStepPlus(), setStepsStatus([...stepsStatus, { progress: 'Completed', step: currentStep }]))
                : setFinish(true)
            : // setStepsStatus?.([...stepsStatus, { progress: 'Completed', step: currentStep }])
              setCurrentStepInitial(currentStep);
        setPanStatus(panStatus === 2 ? panStatus : panStatus + 1);
        btnName === 'Next' ? setPanStatusResult('Good Match') : setPanStatusResult('Matching Failed');
        currentStep >= 8 ? setCompleted(true) : '';
    };

    const increase = () => {
        if (capturelocationData?.coordinates?.lat !== undefined && capturelocationData?.coordinates?.lat !== 'nothing') {
            setCurrentStepPlus();
            setStepsStatus([...stepsStatus, { progress: 'Completed', step: currentStep }]);
        } else {
            console.log('error', capturelocationData);
        }
    };
    useEffect(() => {
        increase();
    }, [capturelocationData, panVerificationfailed]);

    const captureLocation = () => {
        setGetlocation(true);
    };
    const handleOnclick = currentStep === 2 ? captureLocation : handleStepbtn;

    const showInfromation = () => {
        // comment this to show pan verify failed screens

        setShowModal(true);

        // comment this code to show pan verify success screens and camera function proper

        // panVerificationfailed <= 3
        //   ? setPanVerificationfailed(panVerificationfailed + 1)
        //   : setShowModal(true);
    };

    const handleRetryPanImg = () => {
        setPanVerificationfailed(panVerificationfailed + 1);
        setManageVeriyStepback();
    };

    return (
        <div className="pt-8 sm:p-8">
            <div className="text-[22px] font-[500] sm:font-[400]">{pagename}</div>
            {currentStep === 3 || currentStep === 4 || currentStep === 6 || currentStep === 7 || currentStep === 8 ? (
                <div className="mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]">
                    {tagLine}
                    {currentStep === 3 || currentStep === 4 || currentStep === 6 ? <span className="text-primary">.jpg, .png, .pdf</span> : ''}
                </div>
            ) : (
                ''
            )}
            {children}
            <span className={`flex flex-col items-center ${currentStep === 5 ? `mt-20 sm:mt-0` : ``} sm:block`}>
                <ButtonGlobal
                    className={
                        (manageVeriyStep === 0 && btnName === 'Verify PAN') || (manageVeriyStep === 0 && btnName === 'Verify Aadhaar')
                            ? 'bg-default text-white mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]'
                            : 'bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]'
                    }
                    onClick={btnName === 'Verify PAN' || btnName === 'Verify Aadhaar' ? showInfromation : handleOnclick}
                    disabled={
                        (manageVeriyStep === 0 && btnName === 'Verify PAN') || (manageVeriyStep === 0 && btnName === 'Verify Aadhaar')
                            ? true
                            : panVerificationfailed === 2 && manageVeriyStep === 0
                            ? true
                            : false
                    }
                    setCapturelocationData={setCapturelocationData}
                    getLocation={getLocation}
                >
                    <>
                        {panVerificationfailed === 1 ? (
                            <div className="flex justify-center items-center" onClick={handleRetryPanImg}>
                                <img src={retry} alt="retry_icon" className="w-4 h-4 mr-2" /> Retry
                            </div>
                        ) : panVerificationfailed === 2 ? (
                            'Proceed'
                        ) : panVerificationfailed === 3 ? (
                            <div>Next</div>
                        ) : (
                            btnName
                        )}
                    </>
                </ButtonGlobal>

                {currentStep === steps.length + 1 || currentStep === 8 ? (
                    ''
                ) : (
                    <ButtonGlobal className={`font-semibold sm:ml-10 ${currentStep === 5 ? `mt-10` : `mt-6`}`} onClick={handleStatus}>
                        Skip this step
                    </ButtonGlobal>
                )}
            </span>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                handleOnclick={handleOnclick}
                attentionmsg={
                    btnName === 'Verify PAN' ? (
                        <>
                            Are you sure you want to upload this PAN. You will <br className="hidden sm:block" /> get only two attempts for PAN verification
                        </>
                    ) : btnName === 'Verify Aadhaar' ? (
                        <>
                            Are you sure you want to upload this Aadhaar. You will <br /> get only one attempt for Aadhaar verification.
                        </>
                    ) : (
                        ''
                    )
                }
            />
        </div>
    );
};

export default SupersetComponent;
