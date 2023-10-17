import React from 'react';
import { useStore } from '../../../store/zustand';
import ButtonGlobal from '../ButtonGlobal';
import retry from '../../../assets/icons/retry.png';
import camera from '../../assets/icons/camera.svg';
import Uploadfile from '../Uploadfile';
import filledcamera from '../../assets/icons/filledcamera.svg';

type FrontcamProps = {
    handleRetake: (input: string) => void;
    imageVal: any;
    type?: string;
};
const Frontcam = ({ handleRetake, imageVal, type }: FrontcamProps) => {
    const { image } = useStore();

    return (
        <>
            <div className={`w-full justify-center flex ${type === 'videoKyc' ? '' : 'h-[190px]'}`}>
                <img src={imageVal || image} alt="screenshot" className="rounded-[10px] w-full" id="previewImage" />
            </div>
            <span className="flex flex-col justify-end items-end mt-3 ">
                <ButtonGlobal onClick={handleRetake} className="bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[10rem]">
                    <>
                        <img src={retry} alt="retry_icon" className="w-[16px] h-[16px]  mr-1" /> Re-Capture
                    </>
                </ButtonGlobal>
            </span>
        </>
    );
};

export default Frontcam;
