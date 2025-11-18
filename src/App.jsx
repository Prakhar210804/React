import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Login from './Login'
import About from './About'
import Navbar from './Navbar'
import COllege from './COllege'
import Student from './Student'
import Department from './Department'
import Details from './Details'
import User from './User'
import UserDetaials from './UserDetaials'

const App = () => {
  return (
    <div>

      <Navbar/>
      <Routes>

       {/* Layout routing */}
      {/* <Routes>

        <Route element={<Navbar />}>
          <Route path='about' element={<About />} />
        </Route> */}


        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        

        <Route path='user'>
           <Route path='/user/login' element={<Login />} />
           <Route path='/user/signup' element={<Login />} />
           
        </Route>
      
      <Route path='/users' element={<User/>}/>
      <Route path='/users/:id' element={<UserDetaials/>}/>


        <Route path='/college' element={<COllege />}>
          <Route index element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='details' element={<Details />} />
        </Route>


        <Route path='/*' element={<h1>Page not found</h1>} />



      </Routes>
    </div>
  )
}

export default App

