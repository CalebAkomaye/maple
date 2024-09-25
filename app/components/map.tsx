'use client';
import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Loading from '../Loading';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const centre = {
  lat: 37.437041393899676,
  lng: -4.191635586788259,
};

const locations = [
  { lat: 37.437041393899676, lng: -4.191635586788259 },
  { lat: 37.440575591901045, lng: -4.231433159434073 },
  // Add more locations here
];

const MarkerMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load the Google Maps script
    const loadGoogleMaps = async () => {
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      googleMapScript.async = true;
      googleMapScript.onload = () => setIsLoaded(true);
      document.body.appendChild(googleMapScript);
    };

    loadGoogleMaps();
  }, []);

  if (!isLoaded) return <Loading />;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={centre} zoom={10}>
      {locations.map((location, index) => (
        <Marker key={index} position={location} />
      ))}
    </GoogleMap>
  );
};

export default MarkerMap;
