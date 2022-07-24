import React from 'react'

function PageHeading({ title, children }) {
    return (
        <div className='px-10 flex flex-row justify-between items-center'>
            <div className='text-lg text-gray-500 font-medium'>{title}</div>
            {children ? children : ''}
        </div>
    )
}

export default PageHeading