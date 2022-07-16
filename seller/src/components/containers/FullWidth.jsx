import React from 'react'

const FullWidth = ({ children }) => {
    return (
        <div className='w-full bg-white flex flex-col'>{children}</div>
    )
}

export default FullWidth