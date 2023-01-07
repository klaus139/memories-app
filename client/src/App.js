import React from 'react';
import {Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png'


const App = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar posiiton='static' color='inherit'>
                <Typography variant='h2' align='center'>Memories</Typography>
                <img src={memories} alt='memories' height='300' />
                
            </AppBar>
        </Container>
    )
}

export default App;