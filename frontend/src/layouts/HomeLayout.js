import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import useWindowDimensions from '../utils/hooks/useWindowDimensions';

export default function HomeLayout(props) {

  const { width, height, currentBP } = useWindowDimensions();
  return (
    <div className='flex flex-col flex-grow w-full'>
      <Header currentUser={props.currentUser} />
      <div className={`w-full space-y-3 pt-3 px-${currentBP+1}`}>
        <Outlet />

      </div>

    </div>

  )
}
