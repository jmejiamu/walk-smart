import {useEffect, useState} from 'react';
import GeoLocation from '@react-native-community/geolocation';
import {log} from '../utils';

interface Locations {
  Latitude: number;
  Longitude: number;
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<Locations>({
    Latitude: 0,
    Longitude: 0,
  });

  useEffect(() => {
    GeoLocation.getCurrentPosition(
      ({coords}) => {
        setLocation({
          Latitude: coords.latitude,
          Longitude: coords.longitude,
        });
      },
      err => log.error('File: useGeoLocation -|- Func: useGeoLocation ', err),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  return {
    location,
  };
};
