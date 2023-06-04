import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function MapCard({ location }) {
  if (!location) {
    return <div>Loading location...</div>;
  }

  const { latitude, longitude } = location;

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: '100%', height: '600px', borderRadius: '0 0 30px 30px'}}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}>
        <div style={{ color: '#000' }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}
