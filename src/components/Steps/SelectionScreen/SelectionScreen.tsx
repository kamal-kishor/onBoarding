import React from 'react';
import userMerchant from '../../../assets/icons/user_merchant.png';
import userDistributor from '../../../assets/icons/user_distributor.png';
import userEnterprise from '../../../assets/icons/user_enterprise.png';
import { GlobalStepPropsType } from '../../../utils/globalInterfaces/stepsInterface';
import ButtonGlobal from '../../Common/ButtonGlobal';

const SelectionScreen = ({ stepData, handleSubmit, isDisabledCTA }: GlobalStepPropsType) => {
    const { id, name, label, primaryCTAText, form_data } = stepData;
    const [roleVal, setRoleVal] = React.useState<number>(2);
    const handleChange = (e: any) => {
        setRoleVal(parseInt(e.target.value));
    };
    return (
        <div className="bg-lightdefault-100 rounded-lg p-8 flex flex-col max-w-md mt-10 md:mt-0" id={`step_${id}_${name}`}>
            <h2 className="text-lightdefault-900 text-lg font-medium title-font mb-5">{label}</h2>
            {form_data?.roles?.length > 0 &&
                form_data.roles
                    ?.filter((role: any) => role.isVisible)
                    ?.map((role: any, idx: number) => (
                        <div className="flex mb-5" key={`${idx}_${role.id}`}>
                            <div className="mr-5 border-2 border-slate-200  p-4 rounded-full">
                                <img src={role.id === 1 ? userMerchant : role.id === 2 ? userDistributor : userEnterprise}></img>
                            </div>
                            <div className="flex flex-col mr-5 w-full justify-center">
                                <label>{role.label}</label>
                                <div className="text-xs font-light">{role.description}</div>
                            </div>
                            <div>
                                <input id={role.id} type="radio" value={role.merchant_type} name="role" onChange={handleChange} checked={roleVal === role.merchant_type} />
                            </div>
                        </div>
                    ))}

            {/* <div className="flex mb-5">
                <div className="mr-5 border-slate-200 border-2 p-4 rounded-full">
                    <img src={userMerchant}></img>
                </div>
                <div className="flex flex-col mr-5 w-full justify-center">
                    <div>I'm a seller</div>
                    <div className="text-xs font-light">I serve customers from my shop</div>
                </div>
                <div>
                    <input type="radio" />
                </div>
            </div>
            <div className="flex mb-5">
                <div className="mr-5 border-lightdefault-200 border-2 p-4 rounded-full">
                    <img src={userDistributor}></img>
                </div>
                <div className="flex flex-col mr-5 w-full justify-center">
                    <div>I'm a distributor</div>
                    <div className="text-xs font-light">I have a network of seller and i want to serve them</div>
                </div>
                <div>
                    <input type="radio" />
                </div>
            </div>
            <div className="flex">
                <div className="mr-5 border-2 border-slate-200 p-4 rounded-full">
                    <img src={userEnterprise}></img>
                </div>
                <div className="flex flex-col mr-5 w-full justify-center">
                    <div>I'm a Enterprise</div>
                    <div className="text-xs">I want to use API and other solution to make my own service</div>
                </div>
                <div>
                    <input type="radio" />
                </div>
            </div> */}

            <ButtonGlobal
                className="bg-primary bg-black text-white font-bold mt-6 mt-8 py-2 px-8 rounded"
                onClick={() => {
                    handleSubmit({ ...stepData, form_data: { merchant_type: roleVal } });
                }}
                disabled={isDisabledCTA}
            >
                {isDisabledCTA ? 'Please wait...' : primaryCTAText}
            </ButtonGlobal>
        </div>
    );
};

export default SelectionScreen;
