export type StepDataType = {
    id: number;
    name: string;
    label: string;
    primaryCTAText: string;
    description: string;
    isSkipable: boolean;
    isRequired: boolean;
    isVisible: boolean;
    stepStatus: 0 | 1 | 2 | 3;
    role?: number;
    form_data: any;
    success_message?: string;
};
/**
 * @value 0 @description default not yet started
 * @value 1 @description started
 * @value 2 @description skipped
 * @value 3 @description completed
 */
export declare const stepsData: Array<StepDataType>;
export declare const sellerStepsData: Array<StepDataType>;
export declare const DistributorStepsData: Array<StepDataType>;
