import React, { useEffect } from 'react'
//import { useStepperContext } from '../../../contexts/stepperContext'

const SelectBrand = (props) => {
  // const { userData, setUserData } = useStepperContext();
  //setUsedBrands, usedBrands, checkBrandApproval
  const { handleClick } = props;



  useEffect(() => {
    //fetch and set Usedbrands in given verticals
  }, [])

  return (
    <div className='w-full'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-2'>
        <div className='bg-white p-4 rounded-md'>
          <p className=' font-semibold'>Check for the Brand you want to sell</p>
          <div className='w-full py-2 h-20 flex items-center justify-center'>
            <div className='flex w-full justify-center'>
              <input placeholder='Enter Brand Name' type='text' className='text-xs border outline-none p-2 px-4 border-gray-200 rounded-l-md h-10 w-1/3'></input>
              <button className='bg-blue-600 text-white font-semibold flex items-center justify-center text-xs p-2 h-10 rounded-r-md' >Check Brand</button>
            </div>
          </div>
          <div className='relative w-full py-10 '>

            <div className='absolute border-t-2 w-full'></div>

            <div className='absolute border rounded-full text-gray-400 uppercase flex justify-center items-center bg-white left-1/2 h-10 w-10 text-xs -ml-5 -mt-5'>Or</div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
            {/* used Brands in given vertical */}
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>
            <p className='text-xs p-1 text-blue-600'>Brand1</p>

          </div>
        </div>
        <div className='bg-white p-4 text-xs rounded-md h-full'>

          <div className='h-full space-y-3 flex flex-col justify-center items-center'>
            <i className='text-teal-500 text-2xl bx bxs-check-circle'></i>
            <p className='font-semibold'>Brand1</p>
            <p>You can start selling under this brand.</p>
            <button onClick={handleClick} className='bg-blue-600 text-white h-7 flex justify-center items-center rounded-md px-4'>Create New Listing</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SelectBrand