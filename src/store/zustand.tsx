import { create } from 'zustand';
import { stepsData, StepDataType } from '../utils/data/stepsData';

type Zustand = {
    image: any | null;
    selectedFile: any;
    preview: any;
    steps: Array<StepDataType>;
    status: string;
    cameraType: string;
    panStatusResult: string;
    panStatus: number;
    currentStep: number;
    uploadedImage: number;
    manageVeriyStep: number;
    panVerificationfailed: number;
    finish: boolean;
    isYourPan: boolean;
    completed: boolean;
    fetchData: boolean;
    getLocation: boolean;
    cameraStatus: boolean;
    sideBarToggle: boolean;
    setSideBarToggle: () => void;
    setImage: (input: any) => void;
    setCurrentStepPlus: () => void;
    setManageVeriyStep: () => void;
    setCurrentStepMinus: () => void;
    setPreview: (input: any) => void;
    setCurrentStepInitial: (input: number) => void;
    setStatus: (input: string) => void;
    setManageVeriyStepback: () => void;
    setFinish: (input: boolean) => void;
    setManageVeriyStepinital: () => void;
    setPanStatus: (input: number) => void;
    setSelectedFile: (input: any) => void;
    setCameraType: (input: string) => void;
    setIsYourPan: (input: boolean) => void;
    setFetchData: (input: boolean) => void;
    setCompleted: (input: boolean) => void;
    setGetlocation: (input: boolean) => void;
    setUploadedImage: (input: number) => void;
    setCameraStatus: (input: boolean) => void;
    setPanStatusResult: (input: string) => void;
    setCurrentStepInput: (input: number) => void;
    setPanVerificationdone: (input: number) => void;
    setPanVerificationfailed: (input: number) => void;
    setStepsData: (input: StepDataType) => void;
    setInitialStepsData: (input: StepDataType[]) => void;
};

export const useStore = create<Zustand>((set) => ({
    // steps: stepsData?.filter((step: StepDataType) => step.isVisible),
    steps: [],
    image: null,
    finish: false,
    completed: false,
    fetchData: false,
    isYourPan: false,
    getLocation: false,
    cameraStatus: false,
    sideBarToggle: false,
    preview: '',
    cameraType: '',
    selectedFile: '',
    status: 'In Progress',
    panStatusResult: 'Good Match',
    panStatus: 0,
    currentStep: 1,
    uploadedImage: 0,
    manageVeriyStep: 0,
    panVerificationfailed: 0,
    setSideBarToggle: () => set(() => ({})),
    setImage: (input: any) => set(() => ({ image: input })),
    setPreview: (input: any) => set(() => ({ preview: input })),
    setStatus: (input: string) => set(() => ({ status: input })),
    setFinish: (input: boolean) => set(() => ({ finish: input })),
    setPanStatus: (input: number) => set(() => ({ panStatus: input })),
    setFetchData: (input: boolean) => set(() => ({ fetchData: input })),
    setIsYourPan: (input: boolean) => set(() => ({ isYourPan: input })),
    setCompleted: (input: boolean) => set(() => ({ completed: input })),
    setCameraType: (input: string) => set(() => ({ cameraType: input })),
    setSelectedFile: (input: any) => set(() => ({ selectedFile: input })),
    setGetlocation: (input: boolean) => set(() => ({ getLocation: input })),
    setCameraStatus: (input: boolean) => set(() => ({ cameraStatus: input })),
    setUploadedImage: (input: number) => set(() => ({ uploadedImage: input })),
    setCurrentStepInput: (input: number) => set(() => ({ currentStep: input })),
    setPanStatusResult: (input: string) => set(() => ({ panStatusResult: input })),
    setCurrentStepInitial: (input: number) => set((state) => ({ currentStep: input === null || input === undefined ? state.currentStep : input })),
    setCurrentStepPlus: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    setCurrentStepMinus: () => set((state) => ({ currentStep: state.currentStep - 1 })),
    setPanVerificationdone: (input: number) => set(() => ({ panVerificationfailed: input })),
    setPanVerificationfailed: (input: number) => set(() => ({ panVerificationfailed: input })),
    setManageVeriyStep: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep + 1 })),
    setManageVeriyStepinital: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep })),
    setManageVeriyStepback: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep - 1 })),
    setStepsData: (step: StepDataType) => set((state) => ({ steps: state.steps.map((stepItem) => (stepItem.id === step.id ? (stepItem = step) : stepItem)) })),
    setInitialStepsData: (stepData: StepDataType[]) => set(() => ({ steps: stepData }))
}));
