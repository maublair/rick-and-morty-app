import React from 'react'
import '../App.css'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <header id='header' className='nav__bar'>
      <img src={logo} className='img__nav' />
      <nav id='nav' className='nav__items'>
        <a className='link__nav-a' href='#'>
          Locations
        </a>
        <a className='link__nav-b' href='#'>
          Characters
        </a>
      </nav>
    </header>
  )
}

export default NavBar
