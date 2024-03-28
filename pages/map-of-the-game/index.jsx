/* global google */

import React from 'react';
import {
    Box,
    Stack,
    Typography,
    Container,
} from '@mui/material';
import MapWithKMZLayer from '../../components/MapWithKMZLayer';
import GoogleMapLoader from 'react-google-maps-loader';

const containerStyle = {
    width: '1000px',
    height: '500px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  

export default function MapOfTheGame() {

    // const kmzUrl = 'https://www.google.com/maps/d/kml?mid=1Z8Z1Q1J9Z8J9Z8J9Z8J9Z8J9Z8J9Z8J9&forcekml=1';
    // const kmzUrl = '/harta.kmz';
    const kmzUrl = 'https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml';

      // AIzaSyCFe9yreeDTwMZbPWI38ICCwMmjWd2foYY
      // AIzaSyCFe9yreeDTwMZbPWI38ICCwMmjWd2foYY
    

    return  (
        <>
            <Container className="map-main-container">
                <Typography style={{ marginTop: '5rem', color: '#FFF' }} variant="h2">
                    TESTING
                </Typography>
                {/* <GoogleMapLoader
                    params={{
                        key: 'AIzaSyCFe9yreeDTwMZbPWI38ICCwMmjWd2foYY',
                        libraries: 'places',
                    }}
                    render={(google) => (
                        <MapWithKMZLayer
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCFe9yreeDTwMZbPWI38ICCwMmjWd2foYY&libraries=places`}
                            loadingElement={<div style={{ height: '100%' }} />}
                            containerElement={<div style={{ height: '500px' }} />}
                            mapElement={<div style={{ height: '100%' }} />}
                            kmzUrl={kmzUrl}
                        />
                    )}
                /> */}
                <div>
      <MapWithKMZLayer kmzUrl={kmzUrl} />
    </div>
            </Container>
        </>
    )
}