import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router'

const COllege = () => {
  return (
    <div className='college' style={{textAlign:"center", margin: "25px"}}>
      <h1>College Page</h1>
      <NavLink className={'link'} to="student">Student</NavLink>
      <NavLink className={'link'} to="department">Departments</NavLink>
      <NavLink className={'link'} to="details">College Details</NavLink>
    <Outlet/>
      
    </div>
  )
}

export default COllege
