import React from 'react'
import { Link } from 'react-router-dom'

function NewListingMethods() {
    return (
        <div className='w-ful px-4 md:px-6 pb-4 md:pb-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6'>

            <div className='bg-white p-6  rounded-md  space-y-3 items-center justify-between w-full'>
                <div className='text-sm text-gray-500 font-semibold'>Create listings using products available on BrightUrban.</div>
                <div className='flex flex-row items-center h-10 w-full'>
                    <input type='text' className='bg-gray-100 h-full p-3 w-full focus:outline-none text-gray-500 text-sm shadow-sm rounded-l-md' placeholder='Search for Title, SKU Id, UID' />
                    <button type='text' className='h-full w-10 shadow-sm'><i className='flex items-center justify-center h-full w-10 text-white bx bx-search-alt-2 text-2xl rounded-r-md bg-blue-600'></i></button>
                </div>
            </div>

            <div className='bg-white p-6  rounded-md  space-y-3 items-center justify-between'>
                <div className='w-full flex justify-center flex-col items-center space-y-3'>
                    <div className='text-sm text-gray-500 font-semibold'>Have unique products to sell?</div>
                    <div className='w-full uppercase flex flex-col md:flex-row space-x-0 space-y-3 md:space-y-0 md:space-x-6 justify-center items-center'>
                        <Link to='/listings/addNewListings/single'>
                            <div className='bg-blue-600 text-white p-3 text-xs whitespace-nowrap rounded-md'>
                                Add Singe Listing
                            </div>
                        </Link>
                        <Link to='/listings/addNewListings/bulk'>
                            <div className='bg-blue-600 text-white p-3 text-xs whitespace-nowrap rounded-md'>
                                Add Listings in bulk
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NewListingMethods