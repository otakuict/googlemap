import React, { useState, useEffect } from "react";
import {
 
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as parkData from "./data/skateboard-parks.json";
import mapStyles from "./mapStyles";
const shoot = () => {
  alert("Great Shot!");
}
function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
   <div>
     <button onClick={shoot} >click me</button>
    <GoogleMap
      defaultZoom={20}
      defaultCenter={{ lat: 13.880120537036483, lng: 100.64357624086303 }}
      
      defaultOptions={{ styles: mapStyles }}
    >
       
      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            
            lat: 13.88017261395375,
            lng: 100.64368353012925
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
          icon={{
            url: `/skateboarding.svg`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
    </div>
  );
}
 export default Map