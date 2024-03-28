import React from 'react';
import {
    Stack,
    Box,
    Typography,
    Container,
    Button,
} from '@mui/material';

export const ContactForm = ({ handleInputChange, contactForm, handleSubmit }) => {
    return (
        <>
            <Container className="contact-form-container">
                <Box>
                    <Typography
                        variant="h3"
                        style={{
                            color: '#FFF',
                            textAlign: 'center',
                            marginBottom: '5rem'
                        }}
                    >
                        Let's Talk
                    </Typography>
                    <Stack direction="column" spacing={5}>
                        <input
                            className="contact-inputs"
                            placeholder="Name"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                            value={contactForm.name}
                        />
                        <input
                            className="contact-inputs"
                            placeholder="Company"
                            name="company"
                            id="company"
                            onChange={handleInputChange}
                            value={contactForm.company}
                        />
                        <input
                            className="contact-inputs"
                            placeholder="Email"
                            name="email"
                            id="email"
                            onChange={handleInputChange}
                            value={contactForm.email}
                        />
                        <textarea
                            className="contact-textarea"
                            rows="4"
                            cols="50"
                            placeholder="Message"
                            name="support_message"
                            id="suppoert_message"
                            onChange={handleInputChange}
                            value={contactForm.support_message}
                        />
                    </Stack>
                    <Button onClick={() => handleSubmit(contactForm)} className="contact-btn" variant="outlined">
                        Send Message
                    </Button>
                </Box>
            </Container>
        </>
    );
}