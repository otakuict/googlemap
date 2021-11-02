import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
 
} from "react-google-maps";

import Map from "./Map";
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  
  
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
     
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCXDynmx1F1GJX53jIoA9x-jIPelr-44zs`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
