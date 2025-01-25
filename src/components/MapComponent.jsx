import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ profile }) => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: profile.lat,
    lng: profile.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC8RoiQ2bltvvF4QuQ1zhl65Tfia8kCYQw">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
