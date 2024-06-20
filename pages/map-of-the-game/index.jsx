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
    const correctMapInput = 'home-town-childhood-parc';

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
                        Now use bellow riddle to unlock the next map ❤️
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
              </>
             )}
              {!showMap && showWinnieLoading ? (
                  <>
                 <div style={{ marginTop: '2rem' }}>
                    <img className="gif-style" src="images/princess.gif" />
                    
                 </div>
                </>
              ) : (
                 <>
                  <div style={{ marginTop: '5rem' }}>
                <     Typography className="map-temp-text1" variant="h2">
                        Bellow you will find a riddle indicating the day of rendezvous ❤️
                      </Typography>
                      <br /><br /><br />
                      <Typography className="map-temp-text3" variant="h2">
                        A specific day in the summer wood,<br />
                        Eternal love feels so good.<br />
                        Two soul mates join hearts, beating the same tune,<br />
                        Mark this day in lovely June.<br />
                        <br /><br /><br />
                        A special day when love will shine,<br />
                        A day you can never forget,<br />
                        The day when two soul mates have met.<br />
                      </Typography>
                    <ImageZoom
                      src="images/harta7.jpg"
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