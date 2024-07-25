// src/components/Home.jsx

import { Container, Typography } from '@mui/material';

const Home = () => (
    <Container>
        <Typography variant="h3" component="h1" gutterBottom>
            Welcome to My App
        </Typography>
        <Typography variant="body1">
            This is the home page.
        </Typography>
    </Container>
);

export default Home;
