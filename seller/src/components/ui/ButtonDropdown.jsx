import React from 'react'

const ButtonDropdown = ({ title, submenu = null }) => {
    return (
        <div className='group rounded-sm border border-gray-300'>
            <div className='relative flex flex-row text-xs items-center bg-white h-8 px-2'>
                <div>{title}</div>
                {submenu && <i className='pl-2 flex items-center justify-center bx bxs-chevron-down'></i>}
            </div>
            {submenu &&
                submenu.map((el, i) => {
                    <div key={i} className='absolute bg-white p-3 font-medium text-gray-600 space-y-3 border rounded-md group-hover:flex hidden flex-col justify-center text-xs'>
                        <div>{el.title}</div>
                    </div>
                })
            }
        </div>
    )
}

export default ButtonDropdown