import React from 'react'
import '../style/body.css'

const Body = () => {
  return (
    <>
      <header className='header'>
        <div className='inner'>
          <a href='#' className='image avatar'>
            <img src='images/avatar.jpg' alt='' />
          </a>
          <h1>
            <strong>I am Strata</strong>, a super simple
            <br />
            responsive site template freebie
            <br />
            crafted by <a href='http://html5up.net'>HTML5 UP</a>.
          </h1>
        </div>
      </header>

      <div id='main' />
    </>
  )
}

export default Body
