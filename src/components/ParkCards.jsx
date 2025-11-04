import React from "react";

// "parks" in line 6 is an example of destructuring
// to allow you to use "parks" in lieu of "props.parks"

export default function ParkCards({ parks }) {
  if (!parks || parks.length === 0) {
    return <div>No parks found. Try searching for a different location.</div>;
  }

  return (
    <>
      {parks.map((park) => (
        <div id="park-card" key={park.id}>
          <p id="park-name">{park.name || "Unknown Park"}</p>
          {park.image_url && (
            <img
              id="park-pic"
              src={park.image_url}
              alt={park.name || "Park"}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}
         {/* if park.location exists and has an address property */}
          {park.location?.display_address ? (
            <>
              <h3 id="address">{park.location.display_address[0]}</h3>
              <h3 id="address">{park.location.display_address[1]}</h3>
            </>
          ) : park.location ? (
            <>
              <h3 id="address">{park.location.address1}</h3>
              <h3 id="address">
                {park.location.city}, {park.location.state}
              </h3>
            </>
          ) : (
            <h3 id="address">Address not available</h3>
          )}
        </div>
      ))}
    </>
  );
}
