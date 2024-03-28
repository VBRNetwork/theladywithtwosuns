import React from 'react';
import { 
	Box,
	Typography,
	Stack
} from '@mui/material';


export const Team = () => {
    return (
        <>
           <Box style={{ marginTop: '20rem' }}>
				<Typography
					variant="h3"
					style={{ color: '#FFF', fontSize: '2.5rem' }}
				>
					Our Team
				</Typography>
				<Typography
					variant="body1"
					style={{ color: '#8D8D8D', fontSize: '1rem' }}
				>
					Handpicked across multiple industries, united by a common goal. <br />
					With years – sometimes decades – of experience in top performing companies, we&#39;ve 
					brought our acumen <br />
					with us and use it to deliver stellar products to you. 
				</Typography>
				<Box style={{ marginLeft: '22rem', marginTop: '5rem' }}>
				<Stack
					direction="row"
					spacing={25}
				>
					<Stack style={{ marginBottom: '5rem' }} direction="column" spacing={2}>
						<img style={{ width: '10rem', borderRadius: '15px' }} src="images/vanea.jpeg" />
						<Typography variant="p" style={{ color: '#FFF' }}>
							Stefan Vanea
							<Typography className="team-roles" variant="body1" style={{ color: '#FFF' }}>
								CEO
							</Typography>
						</Typography>
					</Stack>
					<Stack direction="column" spacing={2}>
						<img style={{ width: '10rem', borderRadius: '15px' }} src="images/ghici.jpeg" />
						<Typography variant="p" style={{ color: '#FFF' }}>
							Andrei Ghiciac
							<Typography className="team-roles" variant="body1" style={{ color: '#FFF' }}>
								CTO
							</Typography>
						</Typography>
					</Stack>
					<Stack direction="column" spacing={2}>
						<img style={{ width: '10rem', borderRadius: '15px' }} src="images/sorin.png" />
						<Typography variant="p" style={{ color: '#FFF' }}>
							Sorin Aghelescu
							<Typography className="team-roles" variant="body1" style={{ color: '#FFF' }}>
								CFO
							</Typography>
						</Typography>
					</Stack>
					<Stack direction="column" spacing={2}>
						<img style={{ width: '10rem', borderRadius: '15px' }} src="images/shomon.png" />
						<Typography variant="p" style={{ color: '#FFF' }}>
							Dan Shomon
							<Typography className="team-roles" variant="body1" style={{ color: '#FFF' }}>
								Business Partner - USA
							</Typography>
						</Typography>
					</Stack>
				</Stack>
				<Stack direction="row" spacing={25}>
					<Stack direction="column" spacing={2}>
						<img style={{ width: '10rem', borderRadius: '15px' }} src="images/daniel_gaina.jpeg" />
						<Typography variant="p" style={{ color: '#FFF' }}>
							Daniel Gaina
							<Typography className="team-roles" variant="body1" style={{ color: '#FFF' }}>
								Business Development
							</Typography>
						</Typography>
					</Stack>
					<Stack direction="column" spacing={2}>
						<img style={{ width: '10rem', borderRadius: '15px' }} src="images/maria_gaina.png" />
						<Typography variant="p" style={{ color: '#FFF' }}>
							Maria Gaina
							<Typography className="team-roles" variant="body1" style={{ color: '#FFF' }}>
								Web & Graphic Design
							</Typography>
						</Typography>
					</Stack>
					<Stack direction="column" spacing={2}>
						<img style={{ width: '10rem', borderRadius: '15px' }} src="images/lipciuc.png" />
						<Typography variant="p" style={{ color: '#FFF' }}>
							Cristian Lipciuc
							<Typography className="team-roles" variant="body1" style={{ color: '#FFF' }}>
								Content & Copywriting
							</Typography>
						</Typography>
					</Stack>
					<Stack direction="column" spacing={2}>
						<img style={{ width: '10rem', borderRadius: '15px' }} src="images/carusel.png" />
						<Typography variant="p" style={{ color: '#FFF' }}>
							Cristian Grigoras
							<Typography className="team-roles" variant="body1" style={{ color: '#FFF' }}>
								Cyber Secuirty
							</Typography>
						</Typography>
					</Stack>
					
				</Stack>
				<Stack style={{ marginTop: '5rem' }} direction="row" spacing={25}>
					<Stack direction="column" spacing={2}>
							<img style={{ width: '10rem', borderRadius: '15px' }} src="images/paul_craciun.jpeg" />
							<Typography variant="p" style={{ color: '#FFF' }}>
								Paul Craciun
								<Typography className="team-roles" variant="body1" style={{ color: '#FFF' }}>
									Project Manager
								</Typography>
							</Typography>
						</Stack>
						<Stack direction="column" spacing={2}>
							<img style={{ width: '10rem', borderRadius: '15px' }} src="images/ionut.jpg" />
							<Typography variant="p" style={{ color: '#FFF' }}>
								Ionut Paduraru
								<Typography className="team-roles" variant="body1" style={{ color: '#FFF' }}>
									Technical Leader
								</Typography>
							</Typography>
						</Stack>
					</Stack>
				</Box>
			</Box>
        </>
    );
}