type FrontcamProps = {
    handleRetake: (input: string) => void;
    imageVal: any;
    type?: string;
};
declare const Frontcam: ({ handleRetake, imageVal, type }: FrontcamProps) => JSX.Element;
export default Frontcam;
