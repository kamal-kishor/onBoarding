import { StepDataType } from '../../utils/data/stepsData';
import '../../index.css';
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
    stepsData: Array<StepDataType>;
    theme?: Record<string, string>;
};
declare const OnboardingWidget: ({ defaultStep, handleSubmit, isBranding, stepResponse, shopTypes, selectedMerchantType, stateTypes, handleStepCallBack, userData, stepsData, theme }: OAASPackageProps) => JSX.Element;
export default OnboardingWidget;
