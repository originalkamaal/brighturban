import React from 'react'
import { Link } from 'react-router-dom'

function Breadcum({ links }) {
    return (
        <div className='flex flex-row items-center text-xs px-10 pt-4 space-x-2 bg-gray-100'>
            <div className='text-gray-600 capitalize'><Link to='/'>Home</Link></div>
            {links && links.map((el,i) => {

                return <div key={i} className='text-gray-600 capitalize flex items-center'>
                    <i className='font-bold bx bx-chevron-right pr-2' ></i> <Link to={el.path}>{el.text}</Link>
                </div>
            })}


        </div>
    )
}

export default Breadcum