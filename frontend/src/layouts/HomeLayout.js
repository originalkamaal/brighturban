import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

export default function HomeLayout() {
  return (
    <div className='flex flex-col flex-grow w-full bg-red-200'>
      <Header/>
      <Outlet />

    </div>

  )
}
