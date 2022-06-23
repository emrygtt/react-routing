import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'

export const DashboardLayout = () => {
  return (
    <div>
      <Menu />
      <div id='content'>
        <Outlet/>
      </div>
    </div>
  )
}
