import React, { useEffect, useState } from 'react';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';
import ButtonGlobal from '../../Common/ButtonGlobal';
import Labelglobal from '../../Common/Labelglobal';
import InputGlobal from '../../Common/InputGlobal';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
const consentText =
    'You hereby consent to Eko India Financial Services Private Limited as your authorized representative to receive your personal and credit information from UIDAI, CIBIL and other government and private agencies for the purpose of providing you credit in the form of loans or line of credit through our lending partners (&quot;End Use Purpose&quot;).';

const aadhaarConsentSchema = Yup.object().shape({
    name: Yup.string().required('Required').min(3, 'Minimum 3 characters required')
});

const AadhaarConsent = ({ stepData, handleSubmit, isDisabledCTA }: GlobalStepPropsType) => {
    const { label, description, isSkipable, primaryCTAText } = stepData;
    console.log('stepDAta', stepData);
    // const handleAadhaarConsentClick = () => {
    //     handleSubmit({ ...stepData, form_data: { is_consent: 'Y', consent_text: consentText, name: consentData }, stepStatus: 3 });
    // };
    const formValues = { name: '' };
    const handleSkip = () => {
        handleSubmit({ ...stepData, stepStatus: 2 });
    };
    return (
        <div className="pt-8 sm:p-8">
            <div className="text-[22px] font-[500] sm:font-[400]">{label}</div>
            <div className="mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]">{description}</div>
            <div className="mt-10 relative"></div>
            <span className={`flex flex-col items-center sm:block`}>
                <Formik
                    initialValues={formValues}
                    validationSchema={aadhaarConsentSchema}
                    onSubmit={(formData) => {
                        // handleSubmit({ ...stepData, form_data: formData, stepStatus: 3 });
                        // console.log('this is form data', formData);
                        handleSubmit({ ...stepData, form_data: { is_consent: 'Y', consent_text: consentText, name: formData.name }, stepStatus: 3 });
                    }}
                >
                    {({ errors, touched, values, handleChange }) => (
                        <Form>
                            <Labelglobal className="block text-black text-sm font-bold mb-2">Name</Labelglobal>
                            <InputGlobal
                                className="block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none"
                                name="name"
                                value={values.name}
                                onChange={handleChange('name')}
                                id="name"
                                type="text"
                                placeholder=""
                            />
                            {errors.name && touched.name ? <div className="text-darkdanger">{errors.name}</div> : null}
                            <ButtonGlobal className="bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]" disabled={isDisabledCTA}>
                                {isDisabledCTA ? 'Please wait...' : primaryCTAText}
                            </ButtonGlobal>

                            {isSkipable && (
                                <ButtonGlobal className="font-semibold sm:ml-10 mt-6" onClick={handleSkip}>
                                    Skip this step
                                </ButtonGlobal>
                            )}
                        </Form>
                    )}
                </Formik>
            </span>
        </div>
    );
};

export default AadhaarConsent;
