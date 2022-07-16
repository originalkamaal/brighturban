import React from 'react'

const BulkActions = () => {

    const bulkAOptions = [ //bulk action options
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className='flex flex-row px-4 pt-4 pb-2 flex-grow justify-between items-center'>
            <div className='flex items-center flex-wrap flex-row space-x-2'>
                <div className='group rounded-sm border border-gray-300'>
                    <div className='relative flex flex-row text-xs items-center bg-white p-2'>
                        <div>Bulk Acions</div>
                        <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>
                    </div>
                    <div className='z-50  absolute bg-white p-3 font-medium text-gray-600 space-y-3 border rounded-md group-hover:flex hidden flex-col justify-center text-xs'>
                        <div>Deactivate Listings</div>
                        <div>Archive Listings</div>
                    </div>
                </div>
                <div className='group'>
                    <div className='relative text-xs h-8 rounded-sm flex items-center min-w-button justify-center bg-blue-600 p-2 text-white'>Download</div>
                    <div className='z-50 absolute group-hover:flex flex-col hidden'>
                        <div className='text-xs font-medium text-gray-600 w-40 flex-col flex border rounded-md bg-white p-3 space-y-3'>
                            <div>Listing File</div>
                            <div>Catalog File</div>
                        </div>
                    </div>
                </div>
                <div className='group'>
                    <div className='relative text-xs h-8 rounded-sm flex items-center justify-center min-w-button border text-blue-600 border-blue-600 p-2 '>Upload</div>
                    <div className='z-50 absolute group-hover:flex flex-col hidden'>
                        <div className='text-xs font-medium text-gray-600 w-40 flex-col flex border rounded-md bg-white p-3 space-y-3'>
                            <div>Listing File</div>
                            <div>Catalog File</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='group rounded-sm border border-gray-300'>
                <div className='relative flex flex-row text-xs items-center bg-white p-2'>
                    <div>Sort By</div>
                    <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>
                </div>
                <div className='z-50 right-4 absolute bg-white p-3 font-medium text-gray-600 space-y-3 border rounded-md group-hover:flex hidden flex-col justify-center text-xs'>
                    <div>Product Titile</div>
                    <div>Listings Price</div>
                    <div>Usual Price</div>
                    <div>Final Price</div>
                    <div>Stock</div>
                    <div>Category</div>
                    <div>Fulfilment</div>
                    <div>Creation Time</div>
                    <div>Updation Time</div>
                </div>
            </div>
        </div>
    )
}

export default BulkActions