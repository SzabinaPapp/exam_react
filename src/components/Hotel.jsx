import React, { useState} from "react";
import "./Hotel.css"

const Hotel = ({ name, stars, city}) => {
  
  const [shown, setShown] = useState(false);
  
  return (
    <div className="hotelContainer">
      <p>{name}</p>
      {shown && <p>{stars} {city} </p>}
      {shown ? <button onClick={() => setShown(false)}>Show less</button> : <button onClick={() => setShown(true)}>Show more</button>}
    </div>
  )
  
;
}
  

export default Hotel;