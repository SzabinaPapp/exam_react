import React, { useState} from "react";

const Hotel = ({ name, stars, city}) => {
  
  const [shown, setShown] = useState(false);
  
  return (
    <div>
      <p>{name}</p>
      {shown && <p>{stars} {city} </p>}
      {shown ? <button onClick={() => setShown(false)}>Show less</button> : <button onClick={() => setShown(true)}>Show more</button>}
    </div>
  )
  
;
}
  

export default Hotel;