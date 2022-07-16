import React, { useState, useRef } from 'react'
import { useClickAway } from 'react-use';

const ListingFilter = () => {

    const ref = useRef(null);

    useClickAway(ref, () => {
        setOpened('');
    });


    const [opened, setOpened] = useState('');
    return (
        <div ref={ref} className='text-xs border border-gray-200 items-center flex flex-row flex-grow bg-gray-100 p-3 mx-4 space-x-3'>
            <div className='text-gray-500 text-lg'>
                <i class='bx bxs-filter-alt' ></i>
            </div>
            <div className='group rounded-sm cursor-pointer border border-gray-300'>
                <div className='relative flex flex-row text-xs items-center bg-white h-8 px-2' onClick={() => {
                    opened !== 'category' ? setOpened('category') : setOpened('');
                }}>
                    <div>Category</div>
                    {opened == 'category' ? <i className='pl-2 flex items-center justify-center bx bxs-chevron-up'></i> : <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>}
                </div>

                <div className={`${opened == 'category' ? 'flex' : 'hidden'} absolute bg-white p-3 font-medium z-50 text-gray-600 space-y-3 border rounded-md flex-col justify-center text-xs`}>
                    <div>Deactivate Listings</div>
                    <div>Archive Listings</div>
                </div>
            </div>

            <div className='group rounded-sm cursor-pointer border border-gray-300'>
                <div className='relative flex flex-row text-xs items-center bg-white h-8 px-2' onClick={() => {
                    opened !== 'brand' ? setOpened('brand') : setOpened('');
                }}>
                    <div>Brand</div>
                    {opened == 'brand' ? <i className='pl-2 flex items-center justify-center bx bxs-chevron-up'></i> : <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>}
                </div>

                <div className={`${opened == 'brand' ? 'flex' : 'hidden'} absolute bg-white p-3 font-medium z-50 text-gray-600 space-y-3 border rounded-md flex-col justify-center text-xs`}>
                    <div>Deactivate Listings</div>
                    <div>Archive Listings</div>
                </div>
            </div>

            <div className='group rounded-sm cursor-pointer border border-gray-300'>
                <div className='relative flex flex-row text-xs items-center bg-white h-8 px-2' onClick={() => {
                    opened !== 'price' ? setOpened('price') : setOpened('');
                }}>
                    <div>Price</div>
                    {opened == 'price' ? <i className='pl-2 flex items-center justify-center bx bxs-chevron-up'></i> : <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>}
                </div>

                <div className={`${opened == 'price' ? 'flex' : 'hidden'} absolute bg-white p-3 font-medium z-50 text-gray-600 space-y-3 border rounded-md flex-col justify-center text-xs`}>
                    <div>Deactivate Listings</div>
                    <div>Ar</div>
                </div>
            </div>

            <div className='group rounded-sm cursor-pointer border border-gray-300'>
                <div className='relative flex flex-row text-xs items-center bg-white h-8 px-2' onClick={() => {
                    opened !== 'bureco' ? setOpened('bureco') : setOpened('');
                }}>
                    <div>BUTrusted</div>
                    {opened == 'bureco' ? <i className='pl-2 flex items-center justify-center bx bxs-chevron-up'></i> : <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>}
                </div>

                <div className={`${opened == 'bureco' ? 'flex' : 'hidden'} absolute bg-white p-3 font-medium z-50 text-gray-600 space-y-3 border rounded-md flex-col justify-center text-xs`}>
                    <div>Deactivate Listings</div>
                    <div>Ar</div>
                </div>
            </div>

            <div className='group rounded-sm cursor-pointer border border-gray-300'>
                <div className='relative flex flex-row text-xs items-center bg-white h-8 px-2' onClick={() => {
                    opened !== 'fulfill' ? setOpened('fulfill') : setOpened('');
                }}>
                    <div>Fulfillment</div>
                    {opened == 'fulfill' ? <i className='pl-2 flex items-center justify-center bx bxs-chevron-up'></i> : <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>}
                </div>

                <div className={`${opened == 'fulfill' ? 'flex' : 'hidden'} absolute bg-white p-3 font-medium z-50 text-gray-600 space-y-3 border rounded-md flex-col justify-center text-xs`}>
                    <div>Deactivate Listings</div>
                    <div>Ar</div>
                </div>
            </div>



            <div className='group rounded-sm cursor-pointer border border-gray-300'>
                <div className='relative flex flex-row text-xs items-center bg-white h-8 px-2' onClick={() => {
                    opened !== 'stock' ? setOpened('stock') : setOpened('');
                }}>
                    <div>Stock</div>
                    {opened == 'stock' ? <i className='pl-2 flex items-center justify-center bx bxs-chevron-up'></i> : <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>}
                </div>

                <div className={`${opened == 'stock' ? 'flex' : 'hidden'} absolute bg-white p-3 font-medium z-50 text-gray-600 space-y-3 border rounded-md flex-col justify-center text-xs`}>
                    <div>Deactivate Listings</div>
                    <div>Ar</div>
                </div>
            </div>


            <div className='group rounded-sm cursor-pointer border border-gray-300'>
                <div className='relative flex flex-row text-xs items-center bg-white h-8 px-2' onClick={() => {
                    opened !== 'procure' ? setOpened('procure') : setOpened('');
                }}>
                    <div>Procurement Type</div>
                    {opened == 'procure' ? <i className='pl-2 flex items-center justify-center bx bxs-chevron-up'></i> : <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>}
                </div>

                <div className={`${opened == 'procure' ? 'flex' : 'hidden'} absolute bg-white p-3 font-medium z-50 text-gray-600 space-y-3 border rounded-md flex-col justify-center text-xs`}>
                    <div>Fast</div>
                    <div>Standard</div>
                    <div>Made to Order</div>
                </div>
            </div>

            <div className='group rounded-sm cursor-pointer border border-gray-300'>
                <div className='relative flex flex-row text-xs items-center bg-white h-8 px-2' onClick={() => {
                    opened !== 'procuresla' ? setOpened('procuresla') : setOpened('');
                }}>
                    <div>Procurement SLA</div>
                    {opened == 'procuresla' ? <i className='pl-2 flex items-center justify-center bx bxs-chevron-up'></i> : <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>}
                </div>

                <div className={`${opened == 'procuresla' ? 'flex' : 'hidden'} absolute bg-white p-3 font-medium z-50 text-gray-600 space-y-3 border rounded-md flex-col justify-center text-xs`}>
                    <div>Fast</div>
                    <div>Standard</div>
                    <div>Made to Order</div>
                </div>
            </div>

            <div className='bg-blue-600 text-white px-2 h-8 flex justify-center text-sx items-center rounded-sm w-20'>
                <button>Apply</button>
            </div>
        </div>
    )
}

export default ListingFilter