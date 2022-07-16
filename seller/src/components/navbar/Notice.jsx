import React from 'react'
import { Link } from 'react-router-dom'

const Notice = ({type, msg, link}) => {
    return (
        < div className = {`w-full p-2 ${type === 'warning' ? 'bg-red-100' : 'bg-yellow-100' } text-sm flex justify-center items-center`}> {msg} <Link to={link} className="pl-3 text-blue-500 lowercase">know more</Link></div >

      
  )
}

export default Notice