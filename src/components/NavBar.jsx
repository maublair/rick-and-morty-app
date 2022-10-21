import React from 'react'
import '../style/navBar.css'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <section>
      <header id='header' className='nav__bar' />
      <div className='nav__section'>
        <img src={logo} className='img__nav' />
        <nav id='nav' className='nav__items'>
          <a className='link__nav-a' href='#'>
            Locations
          </a>
          <a className='link__nav-b' href='#'>
            Characters
          </a>
        </nav>
      </div>
    </section>
  )
}

export default NavBar
