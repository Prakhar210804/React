import React, { useLayoutEffect } from 'react'
import { Link, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import './Style.css'
import PageNotFound from './PageNotFound'

const App = () => {
  return (
    <div>
      <div  className='header'>

      <div>
        <Link className='link'><h2>Logo</h2></Link>
      </div>
      <nav id='nav'>
        <ul>
          <li>
            <Link  className='link' to="/">Home</Link>

          </li>
          <li>
            <Link  className='link' to="/about">About</Link>

          </li>
          <li>
            <Link  className='link' to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <h1>React Router</h1>
    </div>
  )
}

export default App


