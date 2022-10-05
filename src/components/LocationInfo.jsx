import React from 'react'

const LocationInfo = ({ location }) => {
  console.log(location)
  return (
    <article>
      <div>{location?.name}</div>
      <ul>
        <li><span>Type: </span>{location?.type}</li>
        <li><span>Dimension: </span>{location?.dimension}</li>
        <li><span>Population: </span>{location?.residents.length}</li>
        <li><span>Residents: </span>{location?.residents}</li>
      </ul>
    </article>
  )
}

export default LocationInfo
