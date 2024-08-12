"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

interface CustomMapProps {
  lat: number;
  lng: number;
}

const CustomMap: React.FC<CustomMapProps> = ({ lat, lng }) => {
  const position = { lat, lng };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <APIProvider apiKey={apiKey}>
      <Map defaultCenter={position} defaultZoom={15}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
};

export default CustomMap;
