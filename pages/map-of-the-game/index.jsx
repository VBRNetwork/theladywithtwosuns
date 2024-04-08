/* global google */

import React, { use, useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    Container,
    Button,
} from '@mui/material';
import ImageMarker from "react-image-marker";
import MapWithKMZLayer from '../../components/MapWithKMZLayer';
import GoogleMapLoader from 'react-google-maps-loader';
import PinDropIcon from '@mui/icons-material/PinDrop';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import ParticleImage, { forces, Vector } from "react-particle-image";
import useWindowSize from "@rooks/use-window-size"
import {
    TransformWrapper,
    TransformComponent,
    useControls
  } from "react-zoom-pan-pinch";

  const src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png";

const containerStyle = {
    width: '1000px',
    height: '500px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  

export default function MapOfTheGame() {

    const [markers, setMarkers] = useState([]);

    console.log('markers', markers);

    const CustomMarker = () => {
        return (
          <div
            className="image-marker__marker image-marker__marker--default"
            data-testid="marker"
          ></div>
        );
      };

    const Controls = () => {
        const { zoomIn, zoomOut, resetTransform } = useControls();
        return (
          <>
            <Button onClick={() => zoomIn()}>Zoom In</Button>
            <Button onClick={() => zoomOut()}>Zoom Out</Button>
            <Button onClick={() => resetTransform()}>Reset</Button>
            <Button disabled={!markers.length > 0} onClick={() => setMarkers([])}>
                    Clear Markers
            </Button>
            <Button
                disabled={!markers.length > 0}
                onClick={() => setMarkers((prev) => prev.slice(0, -1))}
            >
                Remove Marker
            </Button>
          </>
        );
      };


    // const kmzUrl = 'https://www.google.com/maps/d/kml?mid=1Z8Z1Q1J9Z8J9Z8J9Z8J9Z8J9Z8J9Z8J9&forcekml=1';
    // const kmzUrl = '/bucharest.kml';
    const kmzUrl = 'https://github.com/VBRNetwork/theladywithtwosuns/blob/master/components/MapWithKMZLayer/bucharest.kml';

      // AIzaSyCFe9yreeDTwMZbPWI38ICCwMmjWd2foYY
      // AIzaSyCFe9yreeDTwMZbPWI38ICCwMmjWd2foYY
    const {innerWidht, innerHeight} = useWindowSize();

    return  (
        <>
            <Container maxWidth="xxl" className="map-main-container">
              <Typography className="map-temp-text" variant="h2">
                  Map of the game is coming soon...
              </Typography>
              <Typography className="map-temp-text2" variant="h2">
                  Stay tuned!
              </Typography>
              <img className="unicorn-img" src="images/unicorn.gif" />
              <ParticleImage
                style={{ marginLeft: '-1rem' }}
                scale={0.55}
                maxParticles={5000}
                width={400}
                height={400}
                backgroundColor="#060d28"
                src={src}
                mouseMoveForce={(x, y) => forces.disturbance(x, y, 6)}
                touchMoveForce={(x, y) => forces.disturbance(x, y, 6)}
                mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
                particleOptions={{
                  mass: () => 40,
                  filter: ({ x, y, image }) => {
                    const pixel = image.get(x, y);
                    return pixel.r === 255;
                  },
                  color: () => "#f00",
                  friction: () => 0.15,
                  initialPosition: ({ canvasDimensions }) => {
                    return new Vector(
                      canvasDimensions.width / 2,
                      canvasDimensions.height / 2
                    );
                  }
                }}
              />
                    {/* <PinDropIcon className="pin-icon" />

                    <img className="map-img" src="https://vbrlabs.b-cdn.net/Harta%20Bucuresti%201921%20-%20Planul%20Mihai%20Pantea.jpg" /> */}
              {/* <div style={{ position: 'relative', zIndex: '0' }}>
                  <MapWithKMZLayer kmzUrl={kmzUrl} />
              </div> */}
              {/* <ImageMarker
                  src="https://vbrlabs.b-cdn.net/Harta%20Bucuresti%201921%20-%20Planul%20Mihai%20Pantea.jpg"
                  markers={markers}
                  onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
                  markerComponent={CustomMarker}
                  extraClass="map-img"
              /> */}
            </Container>
        </>
    )
}