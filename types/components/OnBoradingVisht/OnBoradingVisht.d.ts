import { StepDataType } from '../../utils/data/stepsData';
import '../../index.css';
type OASSPackageProps = {
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
    stepsData: Array<StepDataType>;
};
export declare const OnBoradingVisht: ({ defaultStep, handleSubmit, isBranding, stepResponse, shopTypes, selectedMerchantType, stateTypes, handleStepCallBack, userData, stepsData }: OASSPackageProps) => JSX.Element;
export {};
