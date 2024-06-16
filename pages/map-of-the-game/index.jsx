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
import {JigsawPuzzle} from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";


export default function MapOfTheGame() {

  const src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png";

    const [showMap, setShowMap] = useState(false);
    const [showMapInput, setShowMapInput] = useState('');
    const [showWinnieLoading, setShowWinnieLoading] = useState(true);
    const correctMapInput = 'living-fairytale';

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

  const [clockValue, setClockValue] = useState('2024-05-10T09:25:05.451Z');
  const [clockDisplayed, setClockDisplayed] = useState(false);
  const [clockInput, setClockInput] = useState('');
  const correctClockInput = 'clock';
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [puzzleSolved2, setPuzzleSolved2] = useState(false);
  const [showSecondPuzzle, setShowSecondPuzzle] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState('');
  const correctPuzzleInput = 'puzzle';

  // next clue -> home-town-childhood-parc


const handleChangePuzzleInput = (e) => {
  setPuzzleInput(e.target.value);
  // localStorage.setItem('showMapInput', e.target.value);
}

const showPuzzleFunc = () => {

    if (puzzleInput !== correctPuzzleInput) {
        toast.error("Incorrect Puzzle Input", {
            icon: "⏃",
        });
        return;
    }
    toast.success("Puzzle Solved", {
        icon: "🧩"
    }),
    setShowSecondPuzzle(true);
}

const puzzleSolvedFunc = () => {
    setPuzzleSolved2(true);
    localStorage.setItem('puzzleSolved2', true);
    toast.success("Puzzle Solved", {
        icon: "🧩"
    }),
    setTimeout(() => {
      window.location.reload();
    }, 3000);
}

React.useEffect(() => {
  const puzzleSolved2 = localStorage.getItem('puzzleSolved2');
  if (puzzleSolved2) {
    setPuzzleSolved2(true);
  }
}, []);

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

    return  (
        <>
            <Container maxWidth="xxl" className="map-main-container">
             {!showMap ? (
              <>
              <Box style={{ marginBottom: '2rem' }}>
               {showPuzzle ? (
                <>
                  <JigsawPuzzle
                    imageSrc="images/puzzle2.jpeg"
                    rows={2}
                    columns={3}
                    onSolved={() => puzzleSolvedFunc()}
                  />
                </>
               ) : (
                <>
                  {!puzzleSolved2 ? (
                    <>
                      <Box style={{ marginTop: '1rem' }}>
                        <Button
                          className="map-submit-btn2"
                          variant="contained"
                          onClick={() => setShowPuzzle(true)}
                        >
                          Begin Puzzle Game ❤️
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Typography className="map-temp-text1" variant="h2">
                        Use last riddle clue to unlock the next step ❤️
                      </Typography>
                    </>
                  )}
                </>
               )}
             </Box>
              {puzzleSolved2 ? (
                <>
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
                <></>
              )}
              </>
             ) : (
              <>
             {/* <Box style={{ marginBottom: '2rem' }}>
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
             </Box> */}
              </>
             )}
              {!showMap && showWinnieLoading ? (
                <>
                  {/* <img className="unicorn-img" src="images/unicorn.gif" /> */}
              {/* <PinDropIcon className="pin-icon" /> */}
                  
                  <>
                 <div style={{ marginTop: '2rem' }}>
                    <img className="gif-style" src="images/princess.gif" />
                    
                 </div>
                </>
             
                </>
              ) : (
                 <>
                  <Typography className="map-temp-text1" variant="h2">
                    Answer bellow riddle to unlock next map.
                  </Typography>
                  <br /><br /><br /> 
                  <Typography className="map-temp-text3" variant="h2">
                    In the heart of the city, yet nature surrounds, <br />
                    A place of joy where laughter sounds.<br />
                    In your hometown, where memories stay,<br />
                    Children’s voices, games in play.<br />

                    A haven of green in urban embrace,<br />
                    Where childhood dreams find their space.<br />
                    Recall the times, so pure and stark,<br />
                  </Typography>
                  <div style={{ marginTop: '5rem' }}>
                    <ImageZoom
                      src="images/monaco.jpg"
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