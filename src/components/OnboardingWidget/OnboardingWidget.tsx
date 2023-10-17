import React, { useEffect, useState } from 'react';
import Header from '../Common/Header/Header';
import Headermobile from '../Common/Header/Headermobile';
import { OnBoradingWrapper } from '../Steps';
import { useStore } from '../../store/zustand';
import { StepDataType, stepsData } from '../../utils/data/stepsData';
import '../../index.css';

import { defaultTheme } from '../../utils/defaultTheme';

const globalTheme = (dynamicTheme?: Record<string, string>) => {
    return dynamicTheme || defaultTheme;
};

type OAASPackageProps = {
    defaultStep: string;
    handleSubmit: (data: any) => void;
    developerKey?: string;
    secretKey?: string;
    isBranding?: boolean;
    stepResponse?: any;
    selectedMerchantType?: any;
    shopTypes?: Array<any>;
    stateTypes?: Array<any>;
    handleStepCallBack?: any;
    userData: any;
    theme?: Record<string, string>;
};
const OnboardingWidget = ({
    defaultStep = '12400',
    handleSubmit,
    isBranding = true,
    stepResponse,
    shopTypes = [],
    selectedMerchantType,
    stateTypes = [],
    handleStepCallBack,
    userData,
    theme
}: OAASPackageProps) => {
    const { steps, currentStep, setCurrentStepInitial, setInitialStepsData } = useStore();
    const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);

    useEffect(() => {
        const mergedTheme = globalTheme(theme);
    }, [theme]);

    const handleSidebarToggle = (...args) => {
        setSideBarToggle((prev) => !prev);
    };
    const handleSubmitInternal = () => {
        setCurrentStepInitial(currentStep + 1);
        handleSubmit(args);
    };

    let visibleStepData = stepsData;

    if (visibleStepData) {
        if (userData?.userDetails?.user_type === 3) {
            visibleStepData = visibleStepData?.filter((step) => step.isVisible && step.id !== 10 && step.id !== 9);
        } else {
            visibleStepData = visibleStepData?.filter((step) => step.isVisible);
        }
    }
    useEffect(() => {
        setInitialStepsData(stepsData?.filter((step: StepDataType) => step.isVisible));
    }, [stepsData]);
    // useEffect(() => {
    //     if (visibleStepData) {
    //         const initialStep = visibleStepData?.find((step: StepDataType) => step.role && defaultStep?.includes(`${step.role}`));
    //         setCurrentStepInitial(initialStep ? initialStep?.id : 3);
    //     }
    // }, [defaultStep]);

    return (
        <>
            <div className={`${currentStep === 0 ? 'bg-lightdefault' : 'bg-white'} sm:bg-lightdefault w-full min-h-screen`}>
                {isBranding && (
                    <>
                        <Header />
                        <Headermobile handleSidebarToggle={handleSidebarToggle} />
                    </>
                )}
                <OnBoradingWrapper
                    sideBarToggle={sideBarToggle}
                    setSideBarToggle={setSideBarToggle}
                    handleSubmit={handleSubmitInternal}
                    stepResponse={stepResponse}
                    shopTypes={shopTypes}
                    stateTypes={stateTypes}
                    selectedMerchantType={selectedMerchantType}
                    handleStepCallBack={handleStepCallBack}
                    userData={userData}
                />
                {/* <SelectionScreen /> */}
            </div>
        </>
    );
};

export default OnboardingWidget;
