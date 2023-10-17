import React, { useEffect, useState } from 'react';
import camera from '../../../assets/icons/camera.svg';
import filledcamera from '../../../assets/icons/filledcamera.svg';
import ButtonGlobal from '../../Common/ButtonGlobal';
import Camera from '../../Common/Camera/Camera';
import { useStore } from '../../../store/zustand';
import Browse from '../../Common/Browse';
import Uploadfile from '../../Common/Uploadfile';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';
import Frontcam from '../../Common/Camera/Frontcam';
import InputGlobal from '../../Common/InputGlobal';
import Labelglobal from '../../Common/Labelglobal';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const panRegex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;

const panSchema = Yup.object().shape({
    shopName: Yup.string().required('Required'),
    panNumber: Yup.string().required('Required').matches(panRegex, 'Pan number is invalid')
    // shopType: Yup.string().required('Please select any one option')
});

const PanVerification = ({ stepData, handleSubmit, isDisabledCTA = false, shopTypes = [] }: GlobalStepPropsType) => {
    console.log('PanVerification', shopTypes);
    const { cameraStatus, uploadedImage, setCameraStatus, selectedFile, preview } = useStore();
    const [panError, setPanError] = useState(true);
    const { label, description, isSkipable, primaryCTAText } = stepData;
    const formValues = {
        shopType: '',
        shopName: '',
        panNumber: ''
    };
    const [panImage, setPanImage] = useState({ url: null, fileData: null });

    useEffect(() => {
        setCameraStatus(false);
    }, []);
    // const handleOnSubmit = () => {
    //     handleSubmit({ ...stepData, form_data: { panImage, ...formValues }, stepStatus: 3 });
    // };
    const handleSkip = () => {
        handleSubmit({ ...stepData, stepStatus: 2 });
    };

    const handleImageCapture = (image: any, fileData: any) => {
        setPanImage({
            url: image,
            fileData: fileData
        });
        setPanError(false);
    };
    const handleImageUpload = (files: any, type: any, fileData: any) => {
        setPanImage({
            url: files,
            fileData: fileData
        });
        setPanError(false);
    };
    const handleRetake = () => {
        setPanImage({
            url: null,
            fileData: null
        });
        setPanError(true);
        setCameraStatus(false);
    };
    // const handleChange = (e: any) => {
    //     console.log('handleChange', e.target.name, e.target.value);
    //     setFormValues({
    //         ...formValues,
    //         [e.target.name]: e.target.value
    //     });
    // };
    return (
        <div className="pt-8 sm:p-8 xl:w-[55%] lg:w-[70%]">
            <div className="text-[22px] font-[500] sm:font-[400]">{label}</div>
            <div className="mt-3 mb-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]">
                {description}
                <span className="text-primary"> .jpg, .png, .pdf</span>
            </div>
            <Formik
                initialValues={formValues}
                validationSchema={panSchema}
                onSubmit={(formData) => {
                    if (!panError) {
                        handleSubmit({ ...stepData, form_data: { panImage, ...formData }, stepStatus: 3 });
                    }
                }}
            >
                {({ errors, touched, values, handleChange }) => (
                    <Form>
                        <div>
                            <Labelglobal className="block text-black text-sm font-bold mb-2">Pan Card Number</Labelglobal>
                            <InputGlobal
                                className="block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none"
                                name="panNumber"
                                value={values.panNumber.toUpperCase()}
                                maxLength="10"
                                onChange={handleChange('panNumber')}
                                id="panNumber"
                                type="text"
                                placeholder=""
                            />
                            {errors.panNumber && touched.panNumber ? <div className="text-red">{errors.panNumber}</div> : null}
                        </div>
                        <div className="relative sm:block mt-10">
                            {uploadedImage === 0 ? (
                                cameraStatus === true && panImage?.url === null ? (
                                    <Camera type="pan" cameraType="front" handleImageCapture={handleImageCapture} imagesVal={panImage} />
                                ) : (
                                    <>
                                        {/* <div className="documentimgstyle overflow-hidden w-[100%]"> */}
                                        {panImage.url !== null || undefined ? (
                                            <div className="flex flex-col w-[100%] md:w-[100%] lg:w-[100%] sm:w-[100%] max-[450px]:w-[100%] max-[640px]:w-[100%] max-[640px]:mb-2 md:mb-2 sm:mb-2  mr-3">
                                                <Frontcam imageVal={panImage.url} handleRetake={() => handleRetake()} />
                                            </div>
                                        ) : (
                                            <>
                                                <div className="p-8 text-sm text-darkdefault border border-default rounded-md bg-lightdefault border-dashed flex flex-col justify-center items-center overflow-hidden w-[100%]">
                                                    <img src={camera} className="w-[3rem] h-[3rem] flex-col mb-6" />
                                                    Drag and drop copy of PAN Card or you can
                                                    <div className="flex  mt-8">
                                                        <Uploadfile type="pan" handleUpload={(files: any, type: any, fileData: any) => handleImageUpload(files, type, fileData)} />
                                                        <ButtonGlobal
                                                            className="text-white text-xs bottom-1.5 bg-primary font-medium rounded-md pl-2 pr-2 py-[6px] w-max flex mr-2 justify-center items-center"
                                                            onClick={() => setCameraStatus(true)}
                                                        >
                                                            <>
                                                                <img src={filledcamera} className="h-[2vh] mr-2" /> Open Camera
                                                            </>
                                                        </ButtonGlobal>
                                                    </div>
                                                </div>
                                                {panError === true && <div className="self-start text-red">Required</div>}
                                            </>
                                        )}
                                        {/* </div> */}
                                    </>
                                )
                            ) : (
                                <Browse copyType="Pan Copy" />
                            )}
                        </div>
                        <div className="mt-2">
                            <Labelglobal className="block text-black text-sm font-bold mb-2">Shop Type</Labelglobal>
                            <select
                                name="shopType"
                                value={values.shopType}
                                onChange={handleChange('shopType')}
                                id="cars"
                                className="px-0.5 py-[9px] border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault"
                            >
                                {shopTypes?.length > 0 &&
                                    shopTypes?.map((shop: any, idx: number) => (
                                        <option value={shop.value} key={`${idx}_${shop.value}`}>
                                            {shop.label}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="mt-2">
                            <Labelglobal className="block text-black text-sm font-bold mb-2">Shop Name</Labelglobal>
                            <InputGlobal
                                className="block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none"
                                name="shopName"
                                value={values.shopName}
                                onChange={handleChange('shopName')}
                                id="shopName"
                                type="text"
                                placeholder=""
                            />
                            {errors.shopName && touched.shopName ? <div className="text-red">{errors.shopName}</div> : null}
                        </div>
                        <span className={`flex flex-col items-center sm:block`}>
                            <ButtonGlobal
                                className="bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]"
                                disabled={isDisabledCTA}
                                // onClick={handleOnSubmit}
                            >
                                {isDisabledCTA ? 'Loading...' : primaryCTAText}
                            </ButtonGlobal>

                            {isSkipable && (
                                <ButtonGlobal className="font-semibold sm:ml-10 mt-6" onClick={handleSkip}>
                                    Skip this step
                                </ButtonGlobal>
                            )}
                        </span>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PanVerification;
