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
    const [showPuzzle, setShowPuzzle] = useState(false);
    const [puzzleSolved5, setPuzzleSolved5] = useState(false);
    const [puzzleSolved6, setPuzzleSolved6] = useState(false);
    const [showInitialGif, setShowInitialGif] = useState(true);
    const correctMapInput = 'renewal-in-eternal-love';

    React.useEffect(() => {
      setTimeout(() => {
        setShowInitialGif(false);
      }, 7000);
    }, []);
    
    React.useEffect(() => {
      const puzzleSolved6 = localStorage.getItem('puzzleSolved6');
      if (puzzleSolved6) {
        setPuzzleSolved6(true);
      }
    }, []);

    const handleChangeMapInput = (e) => {
        setShowMapInput(e.target.value);
        
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

const puzzleSolvedFunc = () => {
    setPuzzleSolved6(true);
    localStorage.setItem('puzzleSolved6', true);
    toast.success("Puzzle Solved", {
        icon: "🧩"
    }),
    setTimeout(() => {
      window.location.reload();
    }, 3000);
}




    return  (
        <>
            <Container maxWidth="xxl" className="map-main-container">
             {!showInitialGif ? (
              <>
               <div className="main-content">
                {!showMap ? (
                  <>
                  <Box style={{ marginBottom: '2rem' }}>
                  {showPuzzle ? (
                    <>
                      <JigsawPuzzle
                        imageSrc="images/puzzle5.jpg"
                        rows={2}
                        columns={3}
                        onSolved={() => puzzleSolvedFunc()}
                      />
                    </>
                  ) : (
                    <>
                      {!puzzleSolved6 ? (
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
                            Use the riddle from the last envelope to unlock next location ❤️
                          </Typography>
                          <br /><br />
                          <Typography className="map-temp-text2" variant="h2">
                            HINT: <br />
                            <br />
                            For those in a relationship, the Jack of Diamonds can indicate a renewal in love.<br />
                            <br />
                            You both might be embarking on an adventure,
                            moving house, or planning something exciting for the future. 
                          </Typography>
                        </>
                      )}
                    </>
                  )}
                </Box>
                  {puzzleSolved6 ? (
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
                        <img className="gif-style" src="images/beauty.gif" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ marginTop: '5rem' }}>
                    <     Typography style={{ marginBottom: '2rem' }} className="map-temp-text1" variant="h2">
                            Bellow you will find our next rendezvous place ❤️
                          </Typography>
                        <ImageZoom
                          src="images/harta11.jpg"
                          zoom={300}
                          style={{ marginLeft: '-2rem' }}
                        />
                        </div>
                    </>
                  )}
               </div>
              </>
             ) : (
              <>
                 <div className="initial-gif-container">
                  <Stack direction="row" spacing={2}>
                    <Typography variant="h4" className="loading-text1">
                      Loading Princess
                    </Typography>
                    <img className="gif-loading-style" src="images/bird.gif" alt="Loading GIF" />
                  </Stack>
                    <Box style={{ display: 'flex', justifyContent: 'center' }}>
                        <img className="gif-style" src="images/sleeping.gif" alt="Initial GIF" />
                    </Box>
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