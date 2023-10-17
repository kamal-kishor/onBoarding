import React, { useState } from 'react';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';
import ButtonGlobal from '../../Common/ButtonGlobal';

const LoctionCapture = ({ stepData, handleSubmit, isDisabledCTA = false }: GlobalStepPropsType) => {
    const { label, description, primaryCTAText } = stepData;
    const onSuccess = (location: any) => {
        handleLocationCapture({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
                accuracy: location.coords.accuracy
            }
        });
    };
    const onError = (error: any) => {
        console.log('Error in GeoLocation=>', error);
    };
    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    const handleLocationCapture = (location: any) => {
        handleSubmit({ ...stepData, form_data: { latlong: `${location?.coordinates?.lat},${location?.coordinates?.lng},${location?.coordinates?.accuracy}` }, stepStatus: 3 });
    };

    const handleSkip = () => {
        handleSubmit({ ...stepData, stepStatus: 2 });
    };
    return (
        <div className="pt-8 sm:p-8">
            <div className="text-[22px] font-[500] sm:font-[400]">{label}</div>
            <div className="mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]">{description}</div>
            <ul className="pt-2 pl-5 text-[18px] sm:text-[16px] font-[300]">
                <li className="pb-2">Please click the button below to allow browser to capture your location.</li>
                <li className="pb-2">In browser popup, click &quot;Allow&quot; button to enable location capturing.</li>
                <li className="pb-2">You will be re-directed to next step after successful location capture.</li>
            </ul>
            <span className={`flex flex-col items-center sm:block`}>
                <ButtonGlobal
                    className="bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]"
                    onClick={handleLocation}
                    // setCapturelocationData={handleLocationCapture}
                    // getLocation={true}
                    disabled={isDisabledCTA}
                >
                    {isDisabledCTA ? 'Loading...' : primaryCTAText}
                </ButtonGlobal>

                {stepData?.isSkipable && (
                    <ButtonGlobal className="font-semibold sm:ml-10 mt-6" onClick={handleSkip}>
                        Skip this step
                    </ButtonGlobal>
                )}
            </span>
        </div>
    );
};

export default LoctionCapture;
