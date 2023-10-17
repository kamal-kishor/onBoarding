import React, { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import ButtonGlobal from '../ButtonGlobal';
import filledcamera from '../../../assets/icons/filledcamera.svg';
// import retry from '../../assets/icons/retry.png';
import { useStore } from '../../../store/zustand';
import { resolutions } from './cameraConfig';

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
const Camera = ({ capturing, setCapturing, mediaRecorderRef, recordedChunks, setRecordedChunks, type, imagesVal, handleImageCapture, cameraType }: CameraProps) => {
    const { setCameraStatus } = useStore();
    /**
     * Camera facing mode: "envoironment" or "user"
     */
    const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
    // Check if camers has flash or not
    const [hasFlash, setHasFlash] = useState<boolean>(false);
    const [flashOn, setFlashOn] = useState<boolean>(false);

    const [resolutionIndex, setResolutionIndex] = useState<number>(0);

    const [camDevices, setCamDevices] = useState<any[]>([]);

    const [videoConstraints, setVideoConstraints] = useState<any>({
        audio: false,
        width: 1280,
        height: 720,
        aspectRatio: 0.8,
        facingMode: 'user'
    });

    const webcamRef = useRef<any | null>(null);

    const [deviceId, setDeviceId] = React.useState<number>();

    const handleDevices = React.useCallback(
        (mediaDevices: any) => {
            setCamDevices(mediaDevices.filter(({ kind }: any) => kind === 'videoinput'));
        },
        [setCamDevices]
    );

    const detectFlashSupport = React.useCallback(() => {
        if (!('ImageCapture' in window)) {
            // return Promise.resolve(false);
            setHasFlash(false);
        }
        const track: any = getCameraTrack();
        if (track) {
            const imageCapture = new (window as any).ImageCapture(track);
            imageCapture
                .getPhotoCapabilities()
                .then((result: any) => {
                    setHasFlash(result.fillLightMode.includes('flash') ? true : false);
                })
                .catch(() => {
                    setHasFlash(false);
                });
            /* globals ImageCapture: false */
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((mediaStream) => {
                    webcamRef.current.srcObject = mediaStream;
                })
                .catch((error) => console.error(error));
        } else {
            console.log(':::Cam No camera track found:::');
        }
    }, [setHasFlash]);

    const getCameraTrack = () => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((mediaStream) => {
                webcamRef.current.srcObject = mediaStream;

                return mediaStream.getVideoTracks()[0];
            })
            .catch((error) => console.error(error));
    };

    const toggleFlash = () => {
        const track: any = getCameraTrack();
        if (track) {
            setFlashOn((flashOn: boolean) => {
                track.applyConstraints({
                    advanced: [{ torch: flashOn ? true : false }]
                });
                return !flashOn;
            });
        }
    };

    const switchCamera = () => {
        const currentCamIdx = camDevices.map((cd: any) => cd.deviceId).indexOf(deviceId);
        let newCamIdx = camDevices.map((cd: any) => cd.deviceId).indexOf(deviceId);
        if (camDevices[currentCamIdx + 1]) {
            newCamIdx = camDevices[currentCamIdx + 1];
        } else {
            newCamIdx = camDevices[0];
        }
        setDeviceId(newCamIdx);
        setFacingMode(facingMode === 'user' ? 'environment' : 'user');
    };

    const capture = useCallback(
        async (e: any) => {
            e.preventDefault();
            const imageSrc = webcamRef?.current?.getScreenshot();
            const blob = await fetch(imageSrc).then((res) => res.blob());
            const fileData = new File([blob], `${type}_${cameraType}.${blob.type.split('/')[1]}`, { type: blob.type });

            // formData.append('images', blob);
            handleImageCapture(imageSrc, fileData);
            setCameraStatus(false);
            // setManageVeriyStep();
        },
        [webcamRef]
    );
    //Initializing Camera with effects

    const initCamera = (residx: number = 0) => {
        const res = resolutions[residx];
        const dev = camDevices && camDevices[0] ? camDevices[0]?.deviceId : undefined;
        setVideoConstraints({
            ...videoConstraints,
            audio: false,
            deviceId: deviceId,
            width: res.w,
            height: res.h,
            facingMode: facingMode
        });
    };
    useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
    }, [handleDevices]);
    useEffect(() => {
        detectFlashSupport();
    }, [detectFlashSupport]);
    useEffect(() => {
        if (webcamRef?.current) {
            initCamera(resolutionIndex);
        }
    }, [webcamRef?.current, facingMode]);

    return (
        <span>
            <>
                <span className={`${type === 'Pan' || type === 'videoRecord' ? 'flex justify-end' : 'flex'}`}>
                    <div className="flex flex-col mr-3">
                        <Webcam
                            audio={false}
                            // height={500}
                            // width={500}
                            ref={webcamRef}
                            minScreenshotHeight={500}
                            minScreenshotWidth={500}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            imageSmoothing={true}
                            mirrored={false}
                            className="rounded-[10px]"
                            onUserMediaError={(err) => {
                                initCamera(resolutionIndex > resolutions.length ? 0 : resolutionIndex + 1);
                            }}
                        />
                        <div className={`flex justify-between mt-3`}>
                            {hasFlash && (
                                <ButtonGlobal onClick={toggleFlash} className="bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[10rem]">
                                    <>Turn Flash {flashOn ? 'Off' : 'On'}</>
                                </ButtonGlobal>
                            )}
                            <ButtonGlobal onClick={capture} className="bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[10rem]">
                                <>
                                    <img src={filledcamera} className="w-[16px] h-[16px] mr-1" /> Capture
                                </>
                            </ButtonGlobal>
                            {setCamDevices?.length > 1 && (
                                <ButtonGlobal onClick={switchCamera} className="bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[10rem]">
                                    Switch Camera
                                </ButtonGlobal>
                            )}
                        </div>
                    </div>
                </span>
            </>
            {/* ) : (
                type !== 'Aadhaar' && (
                    <>
                        <img src={image} alt="screenshot" className="rounded-[10px]" />
                        <span className="flex justify-end mt-3">
                            <ButtonGlobal onClick={handleRetake} className="bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[10rem]">
                                <>
                                    <img src={retry} alt="retry_icon" className="w-[16px] h-[16px] mr-1" /> Re-Capture
                                </>
                            </ButtonGlobal>
                        </span>
                    </>
                )
            )} */}
        </span>
    );
};

export default Camera;
