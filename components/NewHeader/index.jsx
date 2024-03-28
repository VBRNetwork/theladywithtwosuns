import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import Link from "next/link";


export const NewHeader = () => {
    return (
        <>
            <Stack style={{ marginBottom: '10rem' }} spacing={20} direction="row">
					<Link
						href="/"
						style={{
							width: "10%",
							textDecoration: "none",
							cursor: 'pointer',
						}}
					>
						<img loading="lazy" style={{ width: '15rem', position: 'fixed' }} src='images/vbrlabs_logo.png' alt="LOGO" />
					</Link>
					<Stack style={{ marginTop: '1.5rem' }} spacing={7} direction="row">
					<Link
						className="nav-link"	
						style={{
							color: '#FFF',
							width: '100%',
							textDecoration: 'none',
						}}
						href="#partners"
					>
						Partners
					</Link>
					<Link
						className="nav-link"	
						style={{
							color: '#FFF',
							width: '100%',
							textDecoration: 'none',
						}}
						href="#about"
					>
						About
					</Link>
					<Link
						className="nav-link"	
						style={{
							color: '#FFF',
							width: '100%',
							textDecoration: 'none',
						}}
						href="#services"
					>
						Services
					</Link>
					<Link
						className="nav-link"	
						style={{
							color: '#FFF',
							width: '100%',
							textDecoration: 'none',
						}}
						href="#team"
					>
						Team
					</Link>
					<Link
						className="nav-link"	
						style={{
							color: '#FFF',
							width: '100%',
							textDecoration: 'none',
						}}
						href="/blog"
					>
						Blog
					</Link>
					</Stack>
				</Stack>
        </>
    );
}