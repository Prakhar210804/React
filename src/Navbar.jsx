import React from 'react'
import { Link } from 'react-router'
import Home from './Home'
import './style.css'

const Navbar = () => {
  return (
    <div className='header'>
      <div>
          <Link className='link'  to={"/"}>Logo</Link>
      </div>
      <div>
        <ul>
          <li><Link className='link' to='/'>Home</Link></li>
          <li><Link className='link' to='/user/login'>Login</Link></li>
          <li><Link className='link' to='/about'>About</Link></li>
          <li><Link className='link' to='/college'>College</Link></li>
          <li><Link className='link' to='/users'>User</Link></li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
