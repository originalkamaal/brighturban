import React from 'react'
import { Outlet} from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'

export default function HomeLayout() {
  return (
    <Outlet/>

  )
}
