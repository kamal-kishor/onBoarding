import React, { useEffect, useState } from 'react';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';
import ButtonGlobal from '../../Common/ButtonGlobal';
import Labelglobal from '../../Common/Labelglobal';
import InputGlobal from '../../Common/InputGlobal';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ConfirmAadhaarNumberSchema = Yup.object().shape({
    aadhaarCardNumber: Yup.string().required('Required').min(12, 'Minimum 12 characters required')
});

const ConfirmAadhaarNumber = ({ stepData, handleSubmit, isDisabledCTA }: GlobalStepPropsType) => {
    const formValues = { aadhaarCardNumber: '' };
    const { label, description, isSkipable, primaryCTAText } = stepData;
    // const handleConfirmAadhaarClick = () => {
    //     handleSubmit({ ...stepData, form_data: { aadhaar: aadhaarCardNumber, is_consent: 'Y' }, stepStatus: 3 });
    // };
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
                    validationSchema={ConfirmAadhaarNumberSchema}
                    onSubmit={(formData) => {
                        handleSubmit({ ...stepData, form_data: { aadhar: formData.aadhaarCardNumber, is_consent: 'Y' }, stepStatus: 3 });
                    }}
                >
                    {({ errors, touched, values, handleChange }) => (
                        <Form>
                            <div className="mb-7 w-[80%] xl:w-[45%]">
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Aadhaar card Number</Labelglobal>
                                <InputGlobal
                                    className="block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none"
                                    name="aadhaarCardNumber"
                                    value={values.aadhaarCardNumber}
                                    onChange={handleChange('aadhaarCardNumber')}
                                    id="username"
                                    maxLength="12"
                                    type="number"
                                    placeholder=""
                                />
                                {errors.aadhaarCardNumber && touched.aadhaarCardNumber ? <div className="text-darkdanger">{errors.aadhaarCardNumber}</div> : null}
                            </div>
                            <div>
                                You hereby consent to Eko India Financial Services Private Limited as your authorized representative to receive your Aadhaar verification information from UIDAI to
                                validate your Aadhaar details.
                            </div>
                            <ButtonGlobal className="bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px] mt-10" disabled={isDisabledCTA}>
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

export default ConfirmAadhaarNumber;
