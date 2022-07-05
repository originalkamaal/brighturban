import React from 'react'

export default function Search() {
    return (

        <div className='hidden md:flex w-1/3 flex-row whitespace-no-wrap'>
            <input type='text' className='shadow-md w-full px-3 py-1 bg-white text-gray-900 text-sm rounded-l-md h-8 flex outline-none focus:outline-none items-center' placeholder='Search' />
            <button className='shadow-md bg-black text-white px-3 rounded-r-md h-8 flex outline-none focus:outline-none items-center'>Search</button>
        </div>
    )
}
