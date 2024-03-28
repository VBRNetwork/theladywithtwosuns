// /* global google */

// import React from 'react';
// import {
//     Box,
//     Stack,
//     Typography,
//     Container,
// } from '@mui/material';
// import { withGoogleMap, GoogleMap, KmlLayer } from 'react-google-maps';
// import { withScriptjs } from 'react-google-maps/lib/withScriptjs';


//   const MapComponent = withGoogleMap((props) => (
//       <GoogleMap
//         defaultZoom={12}
//         defaultCenter={{ lat: 44.4268, lng: 26.1025 }}
//       >
//         <KmlLayer
//           url={props.kmzUrl}
//           options={{ preserveViewport: true }}
//         />
//       </GoogleMap>
//     )
//   );

//   const MapWithKMZLayer = withScriptjs(MapComponent);
  
//   export default MapWithKMZLayer;
import React, { useEffect } from 'react';

const MapWithKMZLayer = ({ kmzUrl }) => {
  useEffect(() => {
    // Define initMap globally
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 44.4268, lng: 26.1025 },
      });
      const kmlLayer = new window.google.maps.KmlLayer({
        url: kmzUrl,
        map: map,
      });
    };

    const loadMapScript = () => {
      // Check if the Google Maps API script is already loaded
      if (!window.google || !window.google.maps) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCFe9yreeDTwMZbPWI38ICCwMmjWd2foYY&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);
      } else {
        // If script is already loaded, call initMap directly
        window.initMap();
      }
    };

    loadMapScript();

    return () => {
      // Cleanup function
      const script = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
      if (script) {
        document.body.removeChild(script);
      }
      // Remove initMap globally
      delete window.initMap;
    };
  }, [kmzUrl]);

  return <div id="map" style={{ height: '500px' }} />;
};

export default MapWithKMZLayer;