import React from 'react';
import { useStore } from '../../../store/zustand';
import nextarrow from '../../../assets/icons/nextarrow.svg';
import previousarrow from '../../../assets/icons/previousarrow.svg';
import { StepDataType } from '../../../utils/data/stepsData';

type HeadermobileProps = {
    handleSidebarToggle: () => void;
};

const Headermobile = ({ handleSidebarToggle }: HeadermobileProps) => {
    const { steps, currentStep, setCurrentStepMinus } = useStore();

    return (
        <div className={`${currentStep !== 0 ? 'block shadow-xl border-2 border-lightdefault p-2' : 'hidden'} sm:hidden`}>
            <span className="flex px-4">
                {currentStep !== 1 ? <img src={previousarrow} alt="previous_arrow" className="bg-primary p-3 rounded-lg" onClick={() => setCurrentStepMinus()} /> : ''}
                <span className="w-[100%] flex justify-center">
                    {steps.map((val: StepDataType, index) => {
                        return (
                            <span key={val.id}>
                                {currentStep - 1 === index ? (
                                    <span className="flex">
                                        <span className="text-white text-xs bottom-1.5 bg-primary font-medium rounded-md pl-2 pr-2 py-[6px] w-max flex mr-2 justify-center items-center mr-2">
                                            {index + 1}
                                        </span>
                                        <span>
                                            <div className="text-[18px] text-primary font-[500]">{val.label}</div>
                                            <div className="text-[15px] text-warning">In-Progress</div>
                                        </span>
                                    </span>
                                ) : (
                                    ''
                                )}
                            </span>
                        );
                    })}
                </span>
                <img src={nextarrow} alt="next_arrow" className="bg-primary p-3 rounded-lg" onClick={handleSidebarToggle} />
            </span>
        </div>
    );
};

export default Headermobile;
