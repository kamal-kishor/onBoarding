import React, { useEffect, useRef, useState } from 'react';
import filledcamera from '../../../assets/icons/filledcamera.svg';
import selfie from '../../../assets/icons/selfie.png';
import camera from '../../../assets/icons/camera.svg';
import { useStore } from '../../../store/zustand';
import ButtonGlobal from '../../Common/ButtonGlobal';
import Camera from '../../Common/Camera/Camera';
import Frontcam from '../../Common/Camera/Frontcam';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';

const VideoKYC = ({ stepData, handleSubmit, isDisabledCTA = false }: GlobalStepPropsType) => {
    const { cameraStatus, setCameraStatus } = useStore();
    const [videoKycError, setVideoKycError] = useState(true);
    const { label, description, isSkipable, primaryCTAText } = stepData;
    const [videoKyc, setVideoKyc] = useState({ url: null, fileData: null });

    useEffect(() => {
        setCameraStatus(false);
    }, []);
    const handleSkip = () => {
        handleSubmit({ ...stepData, stepStatus: 2 });
    };
    const handleImageCapture = (image: any, fileData: any) => {
        setVideoKyc({
            url: image,
            fileData
        });
        setVideoKycError(false);
    };
    const handleRetake = () => {
        setVideoKyc({
            url: null,
            fileData: null
        });
        setCameraStatus(true);
        setVideoKycError(true);
    };
    const handleOnSubmit = () => {
        if (!videoKycError) {
            handleSubmit({ ...stepData, form_data: { videoKyc }, stepStatus: 3 });
        }
    };
    return (
        <div className="pt-8 sm:p-8 xl:w-4/5 md:w-full">
            <div className="text-[22px] font-[500] sm:font-[400]">{label}</div>
            <div className="sm:font-[400] my-6">{description}</div>
            {cameraStatus === true ? (
                <Camera handleImageCapture={handleImageCapture} imagesVal={videoKyc} type="videoRecor" cameraType="front" />
            ) : (
                <>
                    {videoKyc.url !== null || undefined ? (
                        <div className="flex flex-col w-[100%] max-[640px]:mb-2 md:mb-2 sm:mb-2  mr-3">
                            <Frontcam type="videoKyc" imageVal={videoKyc.url} handleRetake={() => handleRetake()} />
                        </div>
                    ) : (
                        <div>
                            <div className="relative sm:hidden block w-[100%]" onClick={() => setCameraStatus(true)}>
                                <div className="p-5 text-lg text-darkdefault border border-default rounded-md bg-lightdefault border-dashed flex flex-col justify-center items-center w-[100%] h-[180px] text-center text-[22px]">
                                    <img src={camera} className="w-[3rem] h-[3rem] flex-col mb-6" />
                                    Click here to take a live photo/video with ID proof
                                </div>
                            </div>
                            <div className="hidden sm:flex w-full mt-8 sm:flex-col sm:items-center xl:flex-row ">
                                <img src={String(selfie)} alt="selfie icon" className="w-28 h-28" />
                                <div className=" w-full py-3 pl-2 text-sm xl:border-default xl:rounded-md xl:bg-lightdefault xl:border-dashed sm:justify-center sm:bg-white px-2 w-[60%] xl:ml-9 sm:ml-0 sm:mt-4 sm:w-[100%] flex xl:justify-between items-center">
                                    <div className="sm:hidden xl:block">Take a live photo/video with ID proof</div>
                                    {/* <InputGlobal type="search" id="search" className="videoKyc min-w-fit" placeholder="Take a live photo/video with ID proof" value={image} /> */}
                                    <ButtonGlobal
                                        className="text-white text-xs bg-primary hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary max-h-8 min-w-fit font-medium rounded-md pl-2 pr-2 py-[6px] w-fit flex justify-center items-center"
                                        onClick={() => setCameraStatus(true)}
                                    >
                                        <>
                                            <img src={filledcamera} className="h-[2vh] mr-2" /> Open Camera
                                        </>
                                    </ButtonGlobal>
                                </div>
                            </div>
                            {videoKycError === true && <div className="flex justify-center text-red">Required</div>}
                        </div>
                    )}
                    <span className={`flex flex-col items-center sm:block mt-8`}>
                        <ButtonGlobal
                            className="bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]"
                            onClick={handleOnSubmit}
                            disabled={isDisabledCTA || videoKycError}
                            // setCapturelocationData={handleLocationCapture}
                            // getLocation={true}
                        >
                            {isDisabledCTA ? 'Loading...' : primaryCTAText}
                        </ButtonGlobal>

                        {isSkipable && (
                            <ButtonGlobal className="font-semibold sm:ml-10 mt-6" onClick={handleSkip}>
                                Skip this step
                            </ButtonGlobal>
                        )}
                    </span>
                </>
            )}
        </div>
    );
};

export default VideoKYC;
