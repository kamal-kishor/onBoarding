import { StepDataType } from '../data/stepsData';

export type GlobalStepPropsType = {
    handleSubmit: (data: any) => void;
    stepData: StepDataType;
    isDisabledCTA: boolean;
    shopTypes?: Array<any>;
    stateTypes?: Array<any>;
    handleStepCallBack?: any;
};
