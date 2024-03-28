import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


export const Footer = () => {

	const date = new Date();
	const currentYear = date.getFullYear();
	
    return (
        <>
            <Box id="footer" style={{ marginTop: '20rem', width: '100%' }}>
					<img
						loading="lazy"
						style={{ width: '100%' }}
						src="images/line.png"
					/>
					
					<Stack direction="row" spacing={175}>
						<img
							loading="lazy"
							style={{
								width: '10rem',
								marginLeft: '1rem'
							}}
							src='images/vbrlabs_logo.png'
							alt="LOGO"
						/>
						<Typography
							variant="body1"
							style={{
								color: '#FFF',
								marginTop: '1rem'
							}}
						>
							All rights reserved to VBR Labs 
							<span
								className="footer-rights-reserved"
							>
								{currentYear}
							</span>
						</Typography>
					</Stack>
					
				</Box>
        </>
    );
}