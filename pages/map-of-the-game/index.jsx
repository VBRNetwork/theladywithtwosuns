/* global google */

import React, { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    Container,
    Button,
} from '@mui/material';
import { Form } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ImageZoom from "react-image-zooom";
import ParticleImage, { forces, Vector } from "react-particle-image";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';


export default function MapOfTheGame() {

  const src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png";

    const [showMap, setShowMap] = useState(false);
    const [showMapInput, setShowMapInput] = useState('');
    const [showWinnieLoading, setShowWinnieLoading] = useState(true);
    const correctMapInput = 'winnie-the-pooh';

    const handleChangeMapInput = (e) => {
        setShowMapInput(e.target.value);
        // localStorage.setItem('showMapInput', e.target.value);
    }

    const showMapFunc = () => {
        if (showMapInput !== correctMapInput) {
            toast.error("Incorrect Map Input", {
                icon: "⏃",
            });
            return;
        }
        setShowMap(true);
    }

    // React.useEffect(() => {
    //   console.log('Home page mounted');
    //   const shoMapInpt = localStorage.getItem('showMapInput');
    //   if (shoMapInpt) {
    //     setShowMapInput(shoMapInpt);
    //   }
    // }
    // , []);

    // React.useEffect(() => {
    //   setShowWinnieLoading(true);
    //   setTimeout(() => {
    //     setShowWinnieLoading(false);
    //   }, 1000);
    // }, []);

  const [clockValue, setClockValue] = useState('2024-05-10T09:25:05.451Z');
  const [clockDisplayed, setClockDisplayed] = useState(false);
  const [clockInput, setClockInput] = useState('');
  const correctClockInput = 'clock';

  const handleChangeClockInput = (e) => {
    setClockInput(e.target.value);
    // localStorage.setItem('showMapInput', e.target.value);
}

const showClockFunc = () => {
    if (clockInput !== correctClockInput) {
        toast.error("Incorrect Clock Input", {
            icon: "⏃",
        });
        return;
    }
    setClockDisplayed(true);
}

  // React.useEffect(() => {
  //   const interval = setInterval(() => setClockValue(new Date()), 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

    return  (
        <>
            <Container maxWidth="xxl" className="map-main-container">
             {!showMap ? (
              <>
              {/* <Typography className="map-temp-text" variant="h2">
                  First Map has been unlocked
              </Typography>
              <Typography className="map-temp-text2" variant="h2">
                  now input you answer to unlock the second one
              </Typography> */}
              <Box style={{ marginBottom: '2rem' }}>
              <Typography className="map-temp-text" variant="h2">
                    Milano was map unlocked
                </Typography>
                <Typography className="map-temp-text3" variant="h2">
                    Your Milano hint is here now. Input your answer to unlock next location.
                </Typography>
             </Box>
              <Form style={{ marginTop: '2rem' }}>
								<input
									type="text"
									className="show-map-btn-input"
									fluid
									placeholder='Write Your Answer'
									name="showMapInput"
									id="showMapInput"
									value={showMapInput}
									onChange={handleChangeMapInput}
								/>
              </Form>
              <Box style={{ marginTop: '1rem' }}>
								<Button
									className="map-submit-btn2"
									variant="contained"
									onClick={showMapFunc}
								>
									Submit
								</Button>
							</Box>
              </>
             ) : (
              <>
             <Box style={{ marginBottom: '2rem' }}>
              <Typography className="map-temp-text1" variant="h2">
                    New Position in Bucharest unlocked
                </Typography>
                <Typography className="map-temp-text2" variant="h2">
                    check the marker to get to the rendezvous <br />
                    point and wait for exact coordinates
                </Typography>
                <Typography className="map-temp-text" variant="h2">
                    Requirements:
                </Typography>
                <Typography className="map-temp-text3" variant="h2">
                    While I'm not a diamond, <br />
                    I'm usually on a ring, <br />
                    And this time you will use me <br />
                    So you can see new things.
                </Typography>
               {clockDisplayed ? (
                <>
                  <Clock locale="ro-RO" size={400} value={clockValue} />
                  
                </>
               ) : (
                <>

                  <Box>
                    <Typography className="map-temp-text" variant="h2">
                          The Riddle:
                      </Typography>
                      <Typography className="map-temp-text3" variant="h2">
                        In the forest deep where ancient trees stand,
                        By the murmuring fountain where water grand,
                        Amidst nature's whispers, a secret it guards,
                        A mystical marvel, where time flows in shards.

                        Its face adorned with nature's touch,
                        Hands like branches, reaching out much.
                        In the heart of the woods, its presence serene,
                        A keeper of time in a mystical scene.
                    </Typography>
                  </Box>
                  <Form style={{ marginTop: '2rem' }}>
                    <input
                      type="text"
                      className="show-map-btn-input"
                      fluid
                      placeholder='Write Your Answer'
                      name="clockInput"
                      id="clockInput"
                      value={clockInput}
                      onChange={handleChangeClockInput}
                    />
                  </Form>
                  <Box style={{ marginTop: '1rem' }}>
                    <Button
                      className="map-submit-btn2"
                      variant="contained"
                      onClick={showClockFunc}
                    >
                      Submit
                    </Button>
							    </Box>
                </>
               ) }
             </Box>
              </>
             )}
              {!showMap && showWinnieLoading ? (
                <>
                  {/* <img className="unicorn-img" src="images/unicorn.gif" /> */}
              {/* <PinDropIcon className="pin-icon" /> */}
                  
                  <>
                 <div style={{ marginLeft: '-2rem', marginTop: '2rem' }}>
                    <div style={{ marginTop: '3rem' }}>
                      <img
                        src="images/milano.jpg"
                        style={{
                          marginLeft: '-10rem',
                          width: '49rem',
                          position: 'absolute',
                          opacity: '0.3',
                          marginTop: '0rem',
                        }}
                      />
                    </div>
                    <img className="winnie-loading" src="images/winnie.gif" />
                    
                 </div>
                </>
             
                </>
              ) : (
                 <>
                  <div style={{ marginTop: '3rem' }}>
                    <ImageZoom
                      src="images/harta4.jpg"
                      zoom={300}
                      style={{ marginLeft: '-2rem' }}
                    />
                    </div>
                 </>
              )}
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
            </Container>
        </>
    )
}