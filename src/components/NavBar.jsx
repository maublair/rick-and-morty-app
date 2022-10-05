import React from 'react'
import '../App.css'

const NavBar = () => {
  return (
    <header id='header'>
      <nav id='nav'>
        <ul className='nav__items'>
          <li>
            <a href='#'>Locations</a>
          </li>
          <li>
            <a href='#'>Characters</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
