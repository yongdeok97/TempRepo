import React, { useEffect, useState } from 'react';
// import MapCard from '../card/MapCard';
import MapDrawingManager from './MapDrawingManager';

const GetLocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLoading(false);
      } catch (error) {
        console.error('Error getting current location:', error);
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <MapDrawingManager location={location} />;
};

export default GetLocation;
