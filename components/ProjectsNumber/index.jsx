import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';

export const ProjectsNumber = () => {
    return (
        <>
            <Box style={{ marginTop: '20rem' }}>
                <Grid container spacing={15}>
                    <Grid item md={6}>
                        <Typography style={{ color: '#FFF' }} variant="h3">
                            Satisfied customers so far
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Stack direction="column" spacing={10}>
                        <Typography className="knwoledge-text" variant="h3">
                            + 100
                        </Typography>
                        <Typography className="knwoledge-subtext" variant="body1">
                                Web Projects
                            </Typography>
                        <Typography className="knwoledge-text" variant="h3">
                            + 20
                        </Typography>
                        <Typography className="knwoledge-subtext" variant="body1">
                                Mobile Projects
                        </Typography>
                        <Typography className="knwoledge-text" variant="h3">
                            + 10
                        </Typography>
                        <Typography className="knwoledge-subtext" variant="body1">
                                Blockchain Projects
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}