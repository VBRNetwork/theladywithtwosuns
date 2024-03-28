import React from 'react';
import { 
	Box,
	Typography,
	Grid,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
} from '@mui/material';


export const Services = () => {
    return (
        <>
           <Box id="services" style={{ marginTop: '20rem' }}>
					<Grid style={{ marginBottom: '5rem' }} container spacing={100}>
						<Grid item md={6}>
							<Typography variant="p" className="about-us-title">
								Services
							</Typography>
							<Typography variant="h3" style={{ fontSize: '2.5rem', color: '#FFF', marginTop: '2rem' }}>
								We help you scale your business.
							</Typography>
						</Grid>
						<Grid style={{ marginTop: '5rem' }} item md={6}>
							<Typography variant="p" style={{ fontSize: '1.1rem', color: "#FFF", marginTop: '5rem' }}>
								A few tweaks, local hosting and minute upgrades are often all you&#39;ll need to massively increase the scope of your project. 
							</Typography>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item md={3}>
						<List sx={{ width: '100%', maxWidth: 360, bgcolor: '#020202' }}>
						<ListItem>
							<ListItemAvatar style={{ marginRight: '3rem' }}>
							<div 
								style={{
									borderRadius: '10px',
									background: '#1E1E1E',
									height: '3.3rem',
									width: '100%',
								}}
							>
								<img loading="lazy" 
									src="images/web-design.png" 
									style={{
										width: '55%',
										marginLeft: '1rem',
										marginTop: '0.5rem'
									}}
								/>
							</div>
							</ListItemAvatar>
							<ListItemText>
								<Typography style={{ color: '#FFF', fontSize: '2rem' }} variant="body1">
									Web Design
								</Typography>
								<Typography style={{ color: '#8D8D8D', fontSize: '1rem' }} variant="body1">
									Designing your application 
									based on copmany values and branding.
								</Typography>
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemAvatar style={{ marginRight: '3rem' }}>
							<div 
								style={{
									borderRadius: '10px',
									background: '#1E1E1E',
									height: '3.3rem',
									width: '100%',
								}}
							>
								<img loading="lazy" 
									src="images/web-dev.png" 
									style={{
										width: '55%',
										marginLeft: '1rem',
										marginTop: '0.5rem'
									}}
								/>
							</div>
							</ListItemAvatar>
							<ListItemText>
								<Typography style={{ color: '#FFF', fontSize: '2rem' }} variant="body1">
									Web Development
								</Typography>
								<Typography style={{ color: '#8D8D8D', fontSize: '1rem' }} variant="body1">
									Bulding cross-browser web applications.
								</Typography>
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemAvatar style={{ marginRight: '3rem' }}>
							<div 
								style={{
									borderRadius: '10px',
									background: '#1E1E1E',
									height: '3.3rem',
									width: '100%',
								}}
							>
								<img loading="lazy" 
									src="images/mobile-dev.png" 
									style={{
										width: '55%',
										marginLeft: '1rem',
										marginTop: '0.5rem'
									}}
								/>
							</div>
							</ListItemAvatar>
							<ListItemText>
								<Typography style={{ color: '#FFF', fontSize: '2rem' }} variant="body1">
									Mobile Development
								</Typography>
								<Typography style={{ color: '#8D8D8D', fontSize: '1rem' }} variant="body1">
									Optimized cross-platform mobile applications with React Native.
								</Typography>
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemAvatar style={{ marginRight: '3rem' }}>
							<div 
								style={{
									borderRadius: '10px',
									background: '#1E1E1E',
									height: '3.3rem',
									width: '100%',
								}}
							>
								<img loading="lazy" 
									src="images/devops.png" 
									style={{
										width: '55%',
										marginLeft: '1rem',
										marginTop: '0.5rem'
									}}
								/>
							</div>
							</ListItemAvatar>
							<ListItemText>
								<Typography style={{ color: '#FFF', fontSize: '2rem' }} variant="body1">
									DevOps
								</Typography>
								<Typography style={{ color: '#8D8D8D', fontSize: '1rem' }} variant="body1">
									OpenStack, Microsoft Azure, Google Cloud
								</Typography>
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemAvatar style={{ marginRight: '3rem' }}>
							<div 
								style={{
									borderRadius: '10px',
									background: '#1E1E1E',
									height: '3.3rem',
									width: '100%',
								}}
							>
								<img loading="lazy" 
									src="images/blockchain.png" 
									style={{
										width: '55%',
										marginLeft: '1rem',
										marginTop: '0.5rem'
									}}
								/>
							</div>
							</ListItemAvatar>
							<ListItemText>
								<Typography style={{ color: '#FFF', fontSize: '2rem' }} variant="body1">
									Blockchain Development
								</Typography>
								<Typography style={{ color: '#8D8D8D', fontSize: '1rem' }} variant="body1">
									Own Blockchain developed based on Ethereum Fork.
								</Typography>
							</ListItemText>
						</ListItem>
					</List>
						</Grid>
						<Grid item md={9}>
							<img loading="lazy" src="images/services.png" />
						</Grid>
					</Grid>
				</Box>
        </>
    );
}