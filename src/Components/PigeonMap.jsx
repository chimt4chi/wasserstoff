import React from "react";
import { Map } from "pigeon-maps";

export function MyMap() {
  return (
    <Map
      height={350}
      width={510}
      defaultZoom={1}
      defaultCenter={[45.879, 0.1]}
    ></Map>
  );
}

// height={410} width={515} defaultZoom={1}
