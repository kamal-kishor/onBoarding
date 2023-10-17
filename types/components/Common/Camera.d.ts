import React from 'react';
type CameraProps = {
    mediaRecorderRef?: any | null;
    capturing?: boolean;
    setCapturing?: React.Dispatch<React.SetStateAction<boolean>>;
    recordedChunks?: any;
    setRecordedChunks?: React.Dispatch<React.SetStateAction<any>>;
    type: string;
    cameraType: string;
    handleImageCapture?: any;
    imagesVal: any;
};
declare const Camera: ({ capturing, setCapturing, mediaRecorderRef, recordedChunks, setRecordedChunks, type, imagesVal, handleImageCapture, cameraType }: CameraProps) => JSX.Element;
export default Camera;
