import React from 'react'

const CountAndTitile = ({ value, title, about }) => {
    return (
        <div className='relative bg-white border border-gray-200 px-3 py-1 mr-2 mb-2 pr-5 min-w-card rounded-md whitespace-nowrap shadow-inner flex flex-row justify-between items-center'>
            <div className='relative flex flex-col'>
                <div className='capitalize text-sm'>{title}</div>
                <div className='text-lg text-gray-500 font-semibold font-mono'>{value}</div>

            </div>

            <div className='absolute top-1 right-2 group'>
                <i className='text-blue-600 opacity-50 hover:opacity-100     bx bxs-info-circle' ></i>
                <div className='z-50 whitespace-normal w-52 group-hover:flex absolute top-0 left-6 -mt-1 hidden bg-gray-600 text-white p-3 rounded text-xs'>
                    <div className='relative'>{about}</div>
                </div>
            </div>


        </div >
    )
}

export default CountAndTitile