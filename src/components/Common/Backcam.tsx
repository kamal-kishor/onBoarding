import React from 'react';
import { useStore } from '../../store/zustand';
import ButtonGlobal from './ButtonGlobal';
import retry from '../../assets/icons/retry.png';
import camera from '../../assets/icons/camera.svg';
import Uploadfile from './Uploadfile';
import filledcamera from '../../assets/icons/filledcamera.svg';

type BackcamProps = {
    handleRetake: (input: string) => void;
    imageVal: any;
};
const Backcam = ({ handleRetake, imageVal }: BackcamProps) => {
    return (
        <div className="flex flex-col w-[50%] md:w-[100%] lg:w-[50%] sm:w-[100%] max-[450px]:w-[100%] max-[640px]:w-[100%] md:mb-2 sm:mb-2  mr-3">
            <div className="w-full justify-center flex h-[190px]">
                <img src={imageVal} alt="screenshot" className="rounded-[10px] w-full" />
            </div>
            <span className="flex flex-col justify-end items-end mt-3">
                <ButtonGlobal onClick={handleRetake} className="bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]">
                    <>
                        <img src={retry} alt="retry_icon" className="w-[16px] h-[16px] mr-1" /> Re-Capture
                    </>
                </ButtonGlobal>
            </span>
        </div>
    );
};

export default Backcam;
