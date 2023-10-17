import React, { useEffect, useState } from 'react';
import Sidebar from '../../Common/Sidebar/Sidebar';
import SupersetComponent from '../SupersetComponent/SupersetComponent';
import Welcome from '../Welcome/Welcome';
import PanVerification from '../PanSteps/PanVerification';
import AdharVerifiction from '../AadharSteps/AdharVerifiction';
import PanAdharMatch from '../PanSteps/PanAdharMatch';
import Business from '../../Steps/Business/Business';
import VideoKYC from '../../Steps/KYC/VideoKYC';
import OnboardingStatus from '../../Steps/OnBoardingStatus/OnboardingStatus';
import LoctionCapture from '../../Steps/Location/LoctionCapture';
import { useStore } from '../../../store/zustand';
import Alert from '../../Common/Alert';
import Fetching from '../../Common/Fetching';
import SelectionScreen from '../SelectionScreen/SelectionScreen';
import { StepDataType } from '../../../utils/data/stepsData';
import SignAgreement from '../Agreement/SignAgreement';
import AadhaarConsent from '../AadharSteps/AadharConsent';
import ConfirmAadhaarNumber from '../AadharSteps/ConfirmAadharNumber';
import AadhaarNumberOtpVerify from '../AadharSteps/AadharNumberOtpVerify';
import BusinessMerchant from '../Business/BusinessMerchant';
import SecretPin from '../PIN/SecretPin';
import ActivationPlan from '../ActivationPlan/ActivationPlan';

type HomepageProps = {
    sideBarToggle: boolean;
    setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: (data: StepDataType) => void;
    stepResponse: any;
    shopTypes: Array<any>;
    selectedMerchantType: string | number;
    stateTypes: Array<any>;
    handleStepCallBack: any;
    userData: any;
};

export const OnBoradingWrapper = ({ sideBarToggle, setSideBarToggle, handleSubmit, stepResponse, shopTypes, selectedMerchantType, stateTypes, handleStepCallBack, userData }: HomepageProps) => {
    const { currentStep, panStatus, fetchData, finish, steps, preview, selectedFile, image, cameraType, setCurrentStepInitial, setStepsData } = useStore();
    const [isDisable, setIsDisable] = useState<boolean>(false);
    const [currentStepData, setCurrentStepData] = useState<any>();

    const handleStepSubmit = (data: any) => {
        console.log('outputDAta', data);
        if (data.id === 1) {
            const currentStepIndex = steps?.map((step: StepDataType) => step?.id)?.indexOf(data?.id);
            setCurrentStepInitial(steps[currentStepIndex + 1]?.id);
            setStepsData(data);
            setCurrentStepData(data);
            // handleSubmit(data);
        } else {
            // Commented due to storybook demo
            // setIsDisable(true);
            setCurrentStepData(data);
            handleSubmit(data);
        }
        // return void;
    };

    const renderStep = (currentStep: number): any => {
        console.log('currentStep', currentStep);
        const stepData: StepDataType | undefined = steps?.find((step: StepDataType) => step.id === currentStep);
        if (stepData) {
            switch (currentStep) {
                case 2:
                    return <SelectionScreen handleSubmit={handleStepSubmit} stepData={stepData} isDisabledCTA={isDisable} />;
                case 3:
                    return <LoctionCapture stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} />;
                case 4:
                    return <AdharVerifiction stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} />;
                case 5:
                    return <AadhaarConsent stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} />;
                case 6:
                    return <ConfirmAadhaarNumber stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} />;
                case 7:
                    return <AadhaarNumberOtpVerify stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} handleStepCallBack={handleStepCallBack} />;
                case 8:
                    return <PanVerification stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} shopTypes={shopTypes} />;
                case 9:
                    if (userData?.userDetails?.user_type === 1) {
                        return <Business stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} shopTypes={shopTypes} stateTypes={stateTypes} />;
                    } else {
                        return <BusinessMerchant stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} shopTypes={shopTypes} stateTypes={stateTypes} />;
                    }
                case 10:
                    return <SecretPin stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} handleStepCallBack={handleStepCallBack} />;

                case 11:
                    return <VideoKYC stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} />;
                case 12:
                    return <SignAgreement stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} handleStepCallBack={handleStepCallBack} />;
                case 13:
                    return <ActivationPlan stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} handleStepCallBack={handleStepCallBack} />;
                case 14:
                    return <PanAdharMatch />;
                case 15:
                    return <OnboardingStatus stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} />;
                default:
                    return <Welcome stepData={stepData} handleSubmit={handleStepSubmit} isDisabledCTA={isDisable} />;
            }
        }
    };

    useEffect(() => {
        if (stepResponse) {
            if (stepResponse?.status === 0 || currentStepData?.id === 4) {
                if (currentStepData) {
                    if (currentStepData?.id !== 2) {
                        const currentStepIndex = steps.map((step: StepDataType) => step?.id)?.indexOf(currentStepData?.id);
                        setCurrentStepInitial(steps[currentStepIndex + 1]?.id);
                    }
                    setStepsData(currentStepData);
                    setCurrentStepData(null);
                }
            }
            setIsDisable(false);
        }
    }, [stepResponse]);
    return (
        <>
            <div className={`${currentStep === 1 && 'pt-0'} ${currentStep === 0 && 'pt-7'} h-screens sm:pt-7 px-8 w-full md:px-24`}>
                <div className="flex items-center">
                    <div className="flex flex-col w-full h-full relative">
                        <div className="sm:flex sm:justify-between">
                            <span className="hidden sm:block md:block lg:block xl:block">
                                <Sidebar steps={steps} userData={userData} />
                            </span>
                            <div className="flex w-full rounded-2xl sm:ml-8 mb-10 pb-10 sm:bg-white relative">
                                {renderStep(currentStep)}
                                {/* {fetchData === true ? (
                                    <span className="hidden sm:block">
                                        <Fetching />
                                    </span>
                                ) : (
                                    ''
                                )} */}
                            </div>
                        </div>

                        {finish === true ? (
                            <span className="hidden sm:block">
                                <Alert />
                            </span>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            {fetchData === true ? (
                <span className="hidden">
                    <Fetching />
                </span>
            ) : (
                ''
            )}
            {finish === true ? (
                <span className="hidden">
                    <Alert />
                </span>
            ) : (
                ''
            )}
            <span className="hidden block">
                {sideBarToggle ? (
                    <div className="z-20 absolute top-14 top-0 backdrop-blur-[1px] left-0 bottom-0 right-0 rounded-2xl flex justify-center">
                        <Sidebar steps={steps} userData={userData} />
                        <div className="w-[25%]" onClick={() => setSideBarToggle((prev) => !prev)}></div>
                    </div>
                ) : (
                    ''
                )}
            </span>
        </>
    );
};
