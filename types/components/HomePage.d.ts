import React from 'react';
import { StepDataType } from '../utils/data/stepsData';
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
declare const HomePage: ({ sideBarToggle, setSideBarToggle, handleSubmit, stepResponse, shopTypes, selectedMerchantType, stateTypes, handleStepCallBack, userData }: HomepageProps) => JSX.Element;
export default HomePage;
