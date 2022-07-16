import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';

export default function HomeLayout(props) {


  const { width, height, currentBP } = useWindowDimensions();
  return (
    <div className='flex flex-col flex-grow w-full'>
      <Navbar />
      <div className='w-full space-y-3 bg-gray-100'>


        <Outlet />

      </div>

    </div>

  )
}
