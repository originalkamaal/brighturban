import React, { useRef, useEffect, useState } from 'react'
import { useClickAway } from 'react-use';




const ProductsList = () => {
    const ref = useRef(null)
    useClickAway(ref, () => {
        setMoreMenu('');
    });


    const [infoWidth, setInfoWidth] = useState(0);
    const [moreMenu, setMoreMenu] = useState('');
    const [isInfoOpen, setInfoOpen] = useState(false);
    const [whichTab, setWhichTab] = useState(0);

    const tableWidth = useRef(null);
    const col1 = useRef(null);
    const col2 = useRef(null);
    const col3 = useRef(null);

    useEffect(() => {
        setInfoWidth(tableWidth.current.offsetWidth - col1.current.offsetWidth - col2.current.offsetWidth - col3.current.offsetWidth);
    }, []);


    const openInfo = () => {

        setInfoOpen(true);

    }

    return (
        <div className='relative h-auto'>
            <div className='px-4 w-full block'>
                <table ref={tableWidth} className='relative w-full border-collapse border border-gray-200'>
                    <tr className='w-full h-7'>
                        <td ref={col1} className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'><input type='checkbox'></input></td>
                        <td ref={col2} className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2 w-28'>Image</td>
                        <td ref={col3} className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>Title</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>SKU ID</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>Listing Price</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>Final Price</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>MRP</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>Stock</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>Category</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>Fulfillment</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>Mark RTD</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>BUTrusted</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>Additional Info</td>
                        <td className='text-center bg-gray-100 border border-gray-200 font-normal text-xs p-2'>Actions</td>
                    </tr>
                    <tr className='w-full bg-green-50'>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <input type='checkbox'></input>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-4'>
                            <img src='https://img1a.flixcart.com/image/50/50/l5iid8w0/duffel-bag/w/u/z/15-dufflebag-87654-gym-duffel-bag-8-sri-balaji-international-20-original-imagg6armhsutezt.jpeg' />
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-1 font-semibold text-blue-600' font-light>
                            <div>Brighturban X1 Pro (4GB, 64GB)</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div>BU_X1_4_64</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div><span>₹</span>27000</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div>
                                <span>₹</span>14999
                            </div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div><span>₹</span>29999</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div>100</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            Mobiles
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            Seller Only
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            Fast
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            Yes
                        </td>
                        {/* <i class='bx bxs-calculator'></i> 
                        <i class='bx bxs-bug'></i>*/}
                        <td className='border bg-red-50 border-gray-200 w-auto text-xs text-center p-2 space-x-2'>
                            <i onClick={openInfo} className='text-blue-600 cursor-pointer bx bxs-calculator text-2xl'></i>
                            <i onClick={openInfo} className='text-blue-600 cursor-pointer bx bxl-chrome text-2xl'></i>
                            <i onClick={openInfo} className='text-blue-600 cursor-pointer bx bx-shield-quarter text-2xl'></i>
                            <i onClick={openInfo} className='text-red-500 cursor-pointer bx bxs-bug text-2xl'></i>
                        </td>
                        <td className='relative border border-gray-200 w-auto text-xs text-center p-2'>
                            <i onClick={() => setMoreMenu(0)} className={`-z-50 flex text-2xl bx bx-dots-vertical-rounded`}></i>
                            <div ref={ref} className={`${moreMenu === 0 ? 'flex' : 'hidden'} absolute right-1/2 top-2/3 bg-gray-200 rounded-md h-40 w-40`}>

                            </div>
                        </td>
                    </tr>
                    <tr className='w-full bg-yellow-50'>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <input type='checkbox'></input>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-4'>
                            <img src='https://img1a.flixcart.com/image/50/50/l5iid8w0/duffel-bag/w/u/z/15-dufflebag-87654-gym-duffel-bag-8-sri-balaji-international-20-original-imagg6armhsutezt.jpeg' />
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-1 font-semibold text-blue-600' font-light>
                            <div>Brighturban X1 Pro (4GB, 64GB)</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div>BU_X1_4_64</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div><span>₹</span>27000</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div>
                                <span>₹</span>14999
                            </div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div><span>₹</span>29999</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div>100</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            Mobiles
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            Seller Only
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            Fast
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            No
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2 space-x-2'>
                            <i onClick={openInfo} className='text-blue-600 cursor-pointer bx bxs-calculator text-2xl'></i>
                            <i onClick={openInfo} className='text-blue-600 cursor-pointer bx bxl-chrome text-2xl'></i>
                            <i onClick={openInfo} className='text-blue-600 cursor-pointer bx bx-shield-quarter text-2xl'></i>
                            <i onClick={openInfo} className='text-yellow-500 cursor-pointer bx bxs-bug text-2xl'></i>
                        </td>
                        <td className='relative border border-gray-200 w-auto text-xs text-center p-2'>
                            <i onClick={() => setMoreMenu(1)} className={`z-0 flex text-2xl bx bx-dots-vertical-rounded`}></i>
                            <div ref={ref} className={`${moreMenu === 1 ? 'flex' : 'hidden'} absolute right-2/3 top-2/3 z-50 bg-gray-200 rounded-md h-40 w-40`}>

                            </div>
                        </td>
                    </tr>
                    <tr className='w-full'>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <input type='checkbox'></input>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-4'>
                            <img src='https://img1a.flixcart.com/image/50/50/l5iid8w0/duffel-bag/w/u/z/15-dufflebag-87654-gym-duffel-bag-8-sri-balaji-international-20-original-imagg6armhsutezt.jpeg' />
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-1 font-semibold text-blue-600' font-light>
                            <div>Brighturban X1 Pro (4GB, 64GB)</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div>BU_X1_4_64</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div><span>₹</span>27000</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div>
                                <span>₹</span>14999
                            </div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div><span>₹</span>29999</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            <div>100</div>
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            Mobiles
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            Seller Only
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            Fast
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2'>
                            NA
                        </td>
                        <td className='border border-gray-200 w-auto text-xs text-center p-2 space-x-2'>
                            <i onClick={openInfo} className='text-blue-600 cursor-pointer bx bxs-calculator text-2xl'></i>
                            <i onClick={openInfo} className='text-blue-600 cursor-pointer bx bxl-chrome text-2xl'></i>
                            <i onClick={openInfo} className='text-blue-600 cursor-pointer bx bx-shield-quarter text-2xl'></i>
                            <i onClick={openInfo} className='text-yellow-500 cursor-pointer bx bxs-bug text-2xl'></i>
                        </td>
                        <td className='relative border border-gray-200 w-auto text-xs text-center p-2'>
                            <i onClick={() => setMoreMenu(1)} className={`z-0 flex text-2xl bx bx-dots-vertical-rounded`}></i>
                            <div ref={ref} className={`${moreMenu === 1 ? 'flex' : 'hidden'} absolute right-2/3 top-2/3 z-50 bg-gray-200 rounded-md h-40 w-40`}>

                            </div>
                        </td>
                    </tr>
                </table>

            </div>
            {isInfoOpen &&
                <div style={{ width: infoWidth }} className="flex flex-col justify-center absolute h-auto top-9 right-4 bg-gray-100">
                    <div className='flex flex-row text-xs justify-between p-2'>
                        <div className='flex flex-row'>
                            <div onClick={() => setInfoOpen(false)} className='bg-white border border-blue-600 font-lightpy-1 text-blue-600 font-lightrounded flex items-center justify-center px-2'>Back to Dashboard</div>
                        </div>
                        <div className='flex flex-row  space-x-4'>

                            <div className='bg-white border border-blue-600 font-lightpy-1 text-blue-600 font-lightrounded flex items-center justify-center px-2'>Edit Listing</div>
                            <div className='bg-white border border-blue-600 font-lightpy-1 text-blue-600 font-lightrounded flex items-center justify-center px-2'>Edit Catalog</div>
                            <div><i className='text-2xl bx bx-dots-vertical-rounded'></i></div>
                        </div>
                    </div>
                    <div className='bg-white p-3 h-28 flex flex-row justify-between'>
                        <div className='flex flex-row'>
                            <div className='p-4 flex justify-center items-center'>
                                <img src='https://img1a.flixcart.com/image/50/50/l5iid8w0/duffel-bag/w/u/z/15-dufflebag-87654-gym-duffel-bag-8-sri-balaji-international-20-original-imagg6armhsutezt.jpeg' alt='Product Thumbnail' />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='font-bold text-blue-600' font-light>Brighturban X1 Pro (4GB, 64GB)</div>
                                <div className='flex flex-row items-center justify-start space-x-3'>
                                    <div className='flex flex-col'>
                                        <div className='text-gray-600 font-lightfont-semibold text-xs'>UID:</div>
                                        <div className='text-gray-600 font-lightfont-semibold text-xs'>SKU:</div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-gray-600 font-lightfont-semibold text-xs'>JIHJHKJHKS87678JHKJ</div>
                                        <div className='text-gray-600 font-lightfont-semibold text-xs'>BU_X1_4_64</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>Open in Frontend</div>
                    </div>
                    <div class="h-7">
                        <ul class="flex flex-wrap space-x-6 px-10 h-full bg-white text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">

                            <button onClick={(e) => { e.preventDefault(); setWhichTab(0) }} class="inline-block text-sm border-b-2 hover:border-blue-600 font-light border-transparent hover:text-gray-600" type="button">Quick Edit</button>
                            <button onClick={(e) => { e.preventDefault(); setWhichTab(1) }} class="inline-block text-sm border-b-2 hover:border-blue-600 font-light border-transparent hover:text-gray-600" type="button">Price Details</button>
                            <button onClick={(e) => { e.preventDefault(); setWhichTab(2) }} class="inline-block text-sm border-b-2 hover:border-blue-600 font-light border-transparent hover:text-gray-600" type="button">Inventory Details</button>
                            <button onClick={(e) => { e.preventDefault(); setWhichTab(3) }} class="inline-block text-sm border-b-2 hover:border-blue-600 font-light border-transparent hover:text-gray-600" type="button">Performance Details</button>
                            <button onClick={(e) => { e.preventDefault(); setWhichTab(4) }} class="inline-block text-sm border-b-2 hover:border-blue-600 font-light border-transparent hover:text-gray-600" type="button">Variant Group</button>
                            <button onClick={(e) => { e.preventDefault(); setWhichTab(5) }} class="inline-block text-sm border-b-2 hover:border-blue-600 font-light border-transparent hover:text-gray-600" type="button">Buyers Q/A</button>
                            <button onClick={(e) => { e.preventDefault(); setWhichTab(6) }} class="inline-block text-sm border-b-2 hover:border-blue-600 font-light border-transparent hover:text-gray-600" type="button">Sold by</button>



                        </ul>
                    </div>
                    <div id="myTabContent" className=''>
                        <div class={`${whichTab === 0 ? 'flex' : 'hidden'} p-4 bg-gray-50 rounded-lg dark:bg-gray-800"`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">

                        </div>
                        <div class={`${whichTab === 1 ? 'flex' : 'hidden'} bg-gray-100 rounded-lg dark:bg-gray-800"`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className='flex flex-row w-full justify-between space-x-6 px-6 py-6'>
                                <div className='flex-1 space-y-6'>
                                    <div className='bg-white h-80 rounded-md p-4'>Kamal</div>
                                </div>
                                <div className='flex-1 space-y-6'>
                                    <div className='bg-white h-20 rounded-md p-4'>Kamal</div>
                                    <div className='bg-white h-40 rounded-md p-4'>Kamal</div>
                                    <div className='bg-white h-30 rounded-md p-4'>Kamal</div>
                                </div>
                            </div>
                        </div>
                        <div class={`${whichTab === 2 ? 'flex' : 'hidden'} p-4 bg-gray-50 rounded-lg dark:bg-gray-800"`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">

                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default ProductsList