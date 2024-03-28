import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


export const HeroSection = () => {
    return (
        <>
            <Stack
				className="hero-full-section"
				direction="row"
				spacing={50}
			>
				<Stack
					className="hero-text-section"
					direction="column"
					spacing={5}
				>
				</Stack>
				<img
					loading="lazy"
					src="images/left-hero.png"
					className="left-hero"
				/>
				<img
					loading="lazy"
					src="images/right-hero.png"
					className="right-hero"
				/>
			</Stack>
				<Box style={{ marginTop: "2rem" }}>
					<Typography
						style={{
							textAlign: 'center',
							color: '#FFF'
						}}
						variant="h2"
						component="h1"
						gutterBottom
					>
						We develop your tech. <br /> 
						<span className="hero-text">You develop your business.</span>
						<Typography
							style={{
								fontSize: '1.5rem',
								marginTop: '2rem'
							}}
							variant="body1"
						>
							Software Development, Blockchain Expertise & 
							Cyber Security Services <br />
							Across Both Public And Private Sectors
						</Typography>
					</Typography>
				</Box>
        </>
    );
}