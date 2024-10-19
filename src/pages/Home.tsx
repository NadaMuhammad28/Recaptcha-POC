import React from 'react';
import { Typography, Button, Container, Grid } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth='lg' className='py-16'>
      <Grid container spacing={4} justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={8} md={6} className='text-center'>
          <Typography
            variant='h3'
            component='h1'
            gutterBottom
            className='font-bold'
          >
            Welcome to Our Website!
          </Typography>
          <Typography variant='body1' paragraph className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel consectetur ultrices, nisi nisl aliquet nisl, eget
            aliquet nisl nisl eget nisl.
          </Typography>
          <Button variant='contained' color='primary' size='large'>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
