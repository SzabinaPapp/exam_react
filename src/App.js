import React, { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask";
import Hotel from './components/Hotel'
import Subscription from './components/Subscription';

import './App.css'

const App = () => {
  const [isLoadingHotels, setIsLoadingHotels] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [formShown, setFormShown] = useState(false);

  useEffect(() => {
    setIsLoadingHotels(true);
    fetch("api/hotels")
    .then(res => res.json())
    .then(data => setHotels(data))
    .catch(err => setHotels(null))
    .finally(() => setIsLoadingHotels(false))
  }, []);
  
  useEffect(() => {
    setTimeout(() => setFormShown(true), 2000)
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {
        isLoadingHotels && <LoadingMask />
      }
      {
        hotels ? 
        hotels.map(hotel => <Hotel key={hotel.name} name={hotel.name}  city={hotel.city} stars={hotel.stars}/>) :
        <p>Oops, something happened</p>
      }
      {
        formShown && <Subscription close={() => setFormShown(false)} />
      }
    </div>
  )
}

export default App
