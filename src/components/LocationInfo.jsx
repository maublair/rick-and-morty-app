import React from 'react'

const LocationInfo = ({ location }) => {
  console.log(location)
  return (
    <>
      <div className="locationTitle">
        <article className='location__title'>{`Planeta: "${location?.name}"`}
        </article>
      </div>
      <div className='location__card'>
        <div className='location__list'>
          <div className='location__text'>Type</div>
          <div className='location__text'>{location?.type}</div>
        </div>
        <div className='location__list'>
          <div className='location__text'>Dimension</div>
          <div className='location__text'>{location?.dimension}</div>
        </div>
        <div className='location__list'>
          <div className='location__text'>Population</div>
          <div className='location__text'>{location?.residents.length}</div>
        </div>
      </div>
  </>
  )
}

export default LocationInfo
