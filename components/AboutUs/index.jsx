import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';

export const AboutUs = () => {
    return (
        <>
            <Box id="about" style={{ marginTop: '20rem' }}>
                <Grid container spacing={100}>
                    <Grid item md={6}>
                        <Typography variant="p" className="about-us-title">
                            About Us
                        </Typography>
                        <Typography variant="h3" style={{ fontSize: '2.5rem', color: '#FFF', marginTop: '2rem' }}>
                            We deliver today, what others dream of tomorrow. 
                        </Typography>
                    </Grid>
                    <Grid style={{ marginTop: '2rem' }} item md={6}>
                        <Typography 
                            variant="p"
                            style={{
                                fontSize: '1.1rem',
                                color: '#FFF',
                                fontWeight: '400',
                            }}
                            >
                                VBR Labs is a small yet robust and tight-knit team that offers software solutions tailored to your needs. <br />
                                We focus on upgrading your business with the latest tech available. <br />
                                This keeps you ahead of the curve, and your projects ahead of the competition. <br /> 
                                We provide software solutions created completely in-house, with a special focus on digitized financial services. <br />
                                Our mission is to build and deliver innovative and highly scalable software to anyone and anywhere. <br />
                                Boasting a highly experienced team and a highly competitive price, VBR Labs can provide you with custom software solutions in no time. 
                        </Typography>
                    </Grid>
                </Grid>
                <img
                    src="images/about1.png"
                    style={{
                        width: '60%',
                        marginLeft: '23rem',
                        marginTop: '5rem'
                    }}
                />
            </Box>
        </>
    );
}