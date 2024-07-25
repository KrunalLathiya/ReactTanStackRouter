// src/App.jsx

import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from '@tanstack/react-router';

const App = () => (
  <Container component="main">
    <Outlet />
  </Container>
);

export default App;