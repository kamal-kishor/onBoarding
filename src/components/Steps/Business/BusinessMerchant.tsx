import React, { useState } from 'react';
import ButtonGlobal from '../../Common/ButtonGlobal';
import InputGlobal from '../../Common/InputGlobal';
import Labelglobal from '../../Common/Labelglobal';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Required').min(3, 'Minimum 3 characters required'),
    shop_address_line2: Yup.string().required('Required').min(3, 'Minimum 3 characters required'),
    shop_address_pincode: Yup.string().required('Required').min(6, 'Minimum 6 digits are required'),
    sender_district: Yup.string().required('Required').min(3, 'Minimum 3 characters required')
    // sender_state: Yup.string().required('Required')
});

const companyTypeData = [
    { label: 'Private Ltd', value: 'privateltd' },
    { label: 'LLP', value: 'llp' },
    { label: 'Partnership', value: 'partnership' },
    { label: 'Sole Proprietorship', value: 'soleproprietorship' }
];
const genderData = [
    { label: 'Male', value: 49 },
    { label: 'Female', value: 50 }
];

const addressCheckData = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' }
];

const BusinessMerchant = ({ stepData, handleSubmit, isDisabledCTA = false, shopTypes = [], stateTypes = [] }: GlobalStepPropsType) => {
    console.log('StateTypes', stateTypes);
    const [formValues, setFormValues] = useState({
        name: '',
        gender: 49,
        businessType: 'privateltd',
        shop_address_line2: '',
        shop_landmark: '',
        shop_address_pincode: '',
        sender_district: '',
        sender_state: '',
        // addressCheck: '',
        latlong: ''
    });
    const [locationVal, setLocationVal] = useState<string>();
    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    const onSuccess = (location: any) => {
        console.log('Location', location);
        // handleLocationCapture({
        //     loaded: true,
        //     coordinates: {
        //         lat: location.coords.latitude,
        //         lng: location.coords.longitude,
        //         accuracy: location.coords.accuracy
        //     }
        // });
        const locationValue = `${location.coords.latitude},${location.coords.longitude},${location.coords.accuracy}`;
        setLocationVal(locationValue);
    };
    const onError = (error: any) => {
        console.log('Error in GeoLocation=>', error);
    };
    return (
        <>
            <Formik
                initialValues={formValues}
                validationSchema={SignupSchema}
                onSubmit={(formData) => {
                    handleSubmit({ ...stepData, form_data: { ...formData, latlong: locationVal }, stepStatus: 3 });
                }}
            >
                {({ errors, touched, values, handleChange }) => (
                    <Form className="bg-white mt-4 ml-6 w-full mr-2">
                        <div className="mt-8 text-black text-lg mb-4 font-bold">Enter Your Details</div>
                        <ButtonGlobal
                            className="bg-primary hover:bg-black text-white font-semibold mt-3 mb-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]"
                            onClick={handleLocation}
                            type="button"
                            // disabled={}
                        >
                            Location Capture
                        </ButtonGlobal>
                        <div className="xl:grid xl:grid-cols-2 sm:flex sm:flex-col gap-4 xl:w-full	">
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Full Name(as per your panCard)</Labelglobal>
                                <InputGlobal
                                    className="block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none mb-0"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange('name')}
                                    id="username"
                                    type="text"
                                    placeholder=""
                                />
                                {errors.name && touched.name ? <div className="text-red">{errors.name}</div> : null}
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Gender</Labelglobal>
                                <select
                                    name="gender"
                                    value={values.gender}
                                    onChange={handleChange('gender')}
                                    id="cars"
                                    className="px-0.5 py-[8px] border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault"
                                >
                                    {genderData.map((gender, idx) => {
                                        return (
                                            <option value={gender.value} key={`${idx}_${gender.value}`}>
                                                {gender.label}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Business Type</Labelglobal>
                                <select
                                    name="businessType"
                                    value={values.businessType}
                                    onChange={handleChange('businessType')}
                                    id="cars"
                                    className="px-0.5 py-[8px] border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault"
                                >
                                    {companyTypeData.map((company, idx) => {
                                        return (
                                            <option value={company.value} key={`${idx}_${company.value}`}>
                                                {company.label}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Business Address</Labelglobal>
                                <InputGlobal
                                    className="block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none"
                                    name="shop_address_line2"
                                    value={values.shop_address_line2}
                                    onChange={handleChange('shop_address_line2')}
                                    id="username"
                                    type="text"
                                    placeholder=""
                                />
                                {errors.shop_address_line2 && touched.shop_address_line2 ? <div className="text-red">{errors.shop_address_line2}</div> : null}
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Landmark(optional)</Labelglobal>
                                <InputGlobal
                                    className="block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none"
                                    name="shop_landmark"
                                    value={values.shop_landmark}
                                    onChange={handleChange('shop_landmark')}
                                    id="username"
                                    type="text"
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Pincode</Labelglobal>
                                <InputGlobal
                                    className="block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none"
                                    name="shop_address_pincode"
                                    value={values.shop_address_pincode}
                                    onChange={handleChange('shop_address_pincode')}
                                    id="username"
                                    type="number"
                                    placeholder=""
                                    maxLength="6"
                                />
                                {errors.shop_address_pincode && touched.shop_address_pincode ? <div className="text-red">{errors.shop_address_pincode}</div> : null}
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">City</Labelglobal>
                                <InputGlobal
                                    className="block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none"
                                    name="sender_district"
                                    value={values.sender_district}
                                    onChange={handleChange('sender_district')}
                                    id="username"
                                    type="text"
                                    placeholder=""
                                />
                                {errors.sender_district && touched.sender_district ? <div className="text-red">{errors.sender_district}</div> : null}
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">State</Labelglobal>
                                <select
                                    name="sender_state"
                                    value={values.sender_state}
                                    onChange={handleChange('sender_state')}
                                    className="px-0.5 py-[8px] border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault"
                                >
                                    {Array.isArray(stateTypes) &&
                                        stateTypes?.map((state, idx) => {
                                            return (
                                                <option value={state.value} key={`${idx}_${state.value}`}>
                                                    {state.label}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            {/* <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Is your permanent address same as business address</Labelglobal>
                                <select
                                    name="addressCheck"
                                    value={values.addressCheck}
                                    onChange={handleChange('addressCheck')}
                                    className="px-0.5 py-2.5 border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault"
                                >
                                    {addressCheckData.map((item, idx) => {
                                        return (
                                            <option value={item.value} key={`${idx}_${item.value}`}>
                                                {item.label}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div> */}
                        </div>
                        <ButtonGlobal className="bg-primary bg-black text-white font-bold mt-6 mt-8 py-2 px-8 rounded" disabled={isDisabledCTA}>
                            {isDisabledCTA ? 'Loading...' : stepData?.primaryCTAText}
                        </ButtonGlobal>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default BusinessMerchant;
