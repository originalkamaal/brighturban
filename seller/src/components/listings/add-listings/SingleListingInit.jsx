import React, { useState } from 'react'
import AddProductDetails from './AddProductDetails';
import SelectBrand from './SelectBrand';
import SelectCatagory from './SelectCatagory';
import Stepper from '../../ui/stepper/Stepper'
import { UseContextProvider } from '../../../contexts/stepperContext';

const SingleListingInit = () => {

    //Select Catagory State
    const [allCats, setAllCats] = useState([]);
    const [allsubCats, setAllsubcats] = useState([]);
    const [allVerticals, setAllverticals] = useState([]);
    const [minCats, setminCats] = useState([]);
    const [bu, setBU] = useState([]);
    const [c, setC] = useState([]);
    const [v, setV] = useState([]);
    const [vId, setVId] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [resVisible, setResVisible] = useState(true);
    const [vDef, setVDef] = useState('');
    const [vsearch, setVsearch] = useState([]);

    //Select Brand State

    const [usedBrands, setUsedBrands] = useState(['A', 'V', 'S']);
    const [brandApprovalStatus, setBrandApprovalStatus] = useState(null);
    const checkBrandApproval = (brand, vid) => {
        //Todo Fetch if brand is approved in particular seller or not
        setBrandApprovalStatus(
            {
                brand: 'ABCNokia',
                vid: 123,
                vd_Name: 'Sari',
                is_approved: true,
                approval_type: 'Open'
            }
        );
        return brandApprovalStatus;
    }

    //stepper Control
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        'Select Catagory', 'Select Brand', 'Add Product Details', 'Complete'
    ]

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <SelectCatagory
                    allCats={allCats}
                    allVerticals={allVerticals}
                    allsubCats={allsubCats}
                    minCats={minCats}
                    bu={bu}
                    c={c}
                    v={v}
                    vId={vId}
                    searchInput={searchInput}
                    resVisible={resVisible}
                    vDef={vDef}
                    vsearch={vsearch}
                    handleClick={handleClick}
                    setAllCats={setAllCats}
                    setSearchInput={setSearchInput}
                    setAllsubcats={setAllsubcats}
                    setAllverticals={setAllverticals}
                    setBU={setBU}
                    setC={setC}
                    setV={setV}
                    setVId={setVId}
                    setminCats={setminCats}
                    setVDef={setVDef}
                    setResVisible={setResVisible}
                    setVsearch={setVsearch} />
            case 2:
                return <SelectBrand handleClick={handleClick} setUsedBrands={setUsedBrands} usedBrands={usedBrands} checkBrandApproval={checkBrandApproval} />
            case 3:
                return <AddProductDetails handleClick={handleClick} />
            case 4:
                return <AddProductDetails />
            default:
        }
    }

    const handleClick = () => {
        let newStep = currentStep;

        newStep++;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className='flex justify-center'>
            {/* Stepper */}
            <div className='horizontal container w-full items-center flex flex-col'>
                <UseContextProvider>
                    <div className='whitespace-nowrap bg-white p-2 md:p-4 md:pb-6 w-full flex items-center justify-center'>

                        <div className='p-2 w-4/5'>
                            <Stepper steps={steps} currentStep={currentStep} />
                        </div>
                    </div>
                    <div className='px-4 rounded-md py-1 w-full'>
                        {displayStep(currentStep)}
                    </div>
                </UseContextProvider>
            </div>

            {/* navigation button */}
            {/* {currentStep !== steps.length && (
                <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />
            )} */}
        </div>
    )
}

export default SingleListingInit