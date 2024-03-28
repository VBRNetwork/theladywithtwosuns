import React from 'react';
import { Box, Stack } from '@mui/material';

export const Partners = () => {
    return (
        <>
            <Box id="partners" style={{ marginTop: '20rem' }}>
                <Stack direction="row" spacing={11}>
                    <img
                        loading="lazy"
                        style={{
                            width: '10rem',
                            height: 'fit-content'
                        }}
                        src="images/microsoft-logo-black-and-white.png"
                    />
                    <img
                        loading="lazy"
                        style={{
                            width: '13rem',
                            height: 'fit-content'
                        }}
                        src="images/houndbytes.png"
                    />
                    <img
                        loading="lazy"
                        style={{
                            width: '10rem',
                            height: 'fit-content'
                        }}
                        src="images/auchan.png"
                    />
                    <img
                        loading="lazy"
                        style={{
                            width: '10rem',
                            height: 'fit-content'
                        }}
                        src="images/cli.png"
                    />
                    <img
                        loading="lazy"
                        style={{
                            width: '10rem',
                            height: 'fit-content'
                        }}
                        src="images/sublime.png"
                    />
                    <img
                        loading="lazy"
                        style={{
                            width: '10rem',
                            height: 'fit-content',
                            marginTop: '1rem'
                        }}
                        src="images/eventspace.jpeg" 
                    />
                    <img
                        loading="lazy"
                        style={{
                            width: '10rem',
                            height: 'fit-content',
                            marginTop: '1rem'
                        }}
                        src="images/foodbiz.jpg"
                    />
                    <img
                        loading="lazy"
                        style={{
                            width: '10rem',
                            height: 'fit-content',
                            marginTop: '1rem'
                        }}
                        src="images/economistul.png"
                    />
                </Stack>
                
            </Box>
        </>
    );
}