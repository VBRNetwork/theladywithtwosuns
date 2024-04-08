import Head from "next/head";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    Container,
    Backdrop,
    CircularProgress,
    Box,
    Typography,
    Stack,
    Button,
} from "@mui/material";
import { Form } from "semantic-ui-react";
import TextTransition, { presets } from 'react-text-transition';
import { toast } from "react-toastify";


export default function Home() {

    const [showBeginJourney, setShowBeginJourney] = React.useState(false);
	const [showBackdrop, setShowBackdrop] = React.useState(false);
	const [showInput, setShowInput] = React.useState(true);

    const [numberOfDays, setNumberOfDays] = React.useState('');
    const correctNumberOfDays = '22';

	const [personStatute, setPersonStatute] = React.useState('');
	const correctPersonStatute = 'Princess';

    const handleChangeNumberOfDays = (e) => {
        setNumberOfDays(e.target.value);
    };

	const handleChangePersonStatute = (e) => {
		setPersonStatute(e.target.value);
	};

    const showBeginJourneyFunc = () => {
        if (numberOfDays !== correctNumberOfDays) {
            toast.error("Incorrect Number of Days", {
                icon: "⏃",
            });
            return;
        }
        setShowBeginJourney(true);
    }

	const showInputFunc = () => {
		if (personStatute !== correctPersonStatute) {
			toast.error("Incorrect Person Statute", {
				icon: "⏃",
			});
			return;
		}
		setShowInput(true);
	}

	useEffect(() => {
		setShowBackdrop(true);
		setTimeout(() => {
			setShowBackdrop(false);
		}, 1000);
	}, []);

    return (
        <>
            <Head>
                <title>The Lady With 2 Suns</title>
                <meta name="description" content={"The Lady With 2 Suns"} />
                <meta property="og:description" content={"The Lady With 2 Suns"} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={"The Lady With 2 Suns"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className="home-main-container">
				<Backdrop
					sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={showBackdrop}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
                <img
                    src="images/frame.png"
                    className="landing-frame"
                />
                <img
                    src="images/landing.jpg"
                    className="landing-img"
                />
                <Box className="landing-box">
                    <Typography component="div" className="landing-text">
                        Welcome to the second phase
                        of our game, <br />
                        <Box style={{ textAlign: 'center' }}>
                            <span style={{ textAlign: "center" }}>
                                My Love !
                            </span>
                        </Box>
                    </Typography>
                </Box>
				{!showBeginJourney && showInput &&  personStatute !== correctPersonStatute && (
					<>
						<Form>
							<input
								type="password"
								className="show-input-input"
								fluid
								placeholder='Input Your Statute Here'
								name="personStatute"
								id="personStatute"
								value={personStatute}
								onChange={handleChangePersonStatute}
							/>
						</Form>
						{/* <Box style={{ marginTop: '-13rem', marginLeft: '8rem' }}>
							<Button
								variant="contained"
								className="landing-submit-btn"
								onClick={showInputFunc}
							>
								Submit
							</Button>s
						</Box> */}
					</>
				)}
				{!showBeginJourney && personStatute === correctPersonStatute && (
					<>
						<Typography className="before-btn-text" variant="p">
                            Please enter the number of days since we first met up until we kissed first time
                        </Typography>
					</>
				)}
                {showBeginJourney && personStatute === correctPersonStatute && (
                    <>
                        <Button
                            className="landing-btn"
                            variant="contained"
                            component="a"
                            href="/map-of-the-game"
                        >
                            Begin Your Journey
                        </Button>
                    </>
                )}
                <Box style={{ marginTop: '6rem' }}>
                    {personStatute === correctPersonStatute && (
						<>
							{!showBeginJourney ? (
						<>
							<Form>
								<input
									type="password"
									className="show-btn-input"
									fluid
									placeholder='Number of days since we first met up until we kissed first time'
									name="numberOfDays"
									id="numberOfDays"
									value={numberOfDays}
									onChange={handleChangeNumberOfDays}
								/>
                    		</Form>
							<Box style={{ marginTop: '1rem' }}>
								<Button
									className="landing-submit-btn"
									variant="contained"
									onClick={showBeginJourneyFunc}
								>
									Submit
								</Button>
							</Box>
						</>
					) : (
						<>
							<Typography
								style={{
									color:'#d5a04e',
									fontStyle: 'italic',
									fontWeight: '700',
								}}
								variant="p"
							>
								You have entered the correct number of days. <br />
								Please click on the button below 
								to begin your journey.
							</Typography>
						</>
					)}
						</>
					)}
                </Box>
            </Container>
        </>
    );
}