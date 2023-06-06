import React, { useEffect, useState } from 'react';
import MapCard from '../card/MapCard';

const GetLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      } catch (error) {
        console.error('Error getting current location:', error);
      }
    };

    getLocation();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  return location;
};

export default GetLocation;
