import '../../index.css';
import { StepDataType } from '../../utils/data/stepsData';
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
export declare const Home: ({ defaultStep, handleSubmit, isBranding, stepResponse, shopTypes, selectedMerchantType, stateTypes, handleStepCallBack, userData, stepsData }: OASSPackageProps) => JSX.Element;
export {};
