import React from "react";
import data from "./cities";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Leaflet = () => {
  const position = [20.0902, 11.7129];

  return (
    <div
      style={{
        position: "relative",
        height: "60vh", // Adjust this value based on your design
        width: "100%",
        margin: "0 auto",
      }}
    >
      <MapContainer
        center={position}
        zoom={2}
        style={{
          top: "0px",
          height: "505px",
          width: "68%",
          right: "100px",
          position: "absolute",
          zIndex: 0,
        }}
        minZoom={2}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.png"
          attribution='Map data: &copy; <a href="http://www.govdata.de/dl-de/by-2-0">dl-de/by-2-0</a>'
        />
        {data.city.map((city) => {
          return (
            <CircleMarker
              center={[city["coordinates"][1], city["coordinates"][0]]}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Leaflet;
