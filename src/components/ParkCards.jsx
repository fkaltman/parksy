import React from 'react'

// "parks" in line 6 is an example of destructuring
// to allow you to use "parks" in lieu of "props.parks"

export default function ParkCards({parks}) {
  
  return (
    <>
      {parks.map(park => (
        <div id="park-card" key={park.id}>
          <p id="park-name">{park.name}</p>
          <img id="park-pic" src={park.image_url} alt="" />
          <h3 id="address">{park.location.display_address[0]}</h3>
          <h3 id="address">{park.location.display_address[1]}</h3>
        </div>
      ))}
      
    </>
  )
}
