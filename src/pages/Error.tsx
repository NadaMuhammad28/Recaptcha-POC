import { Button, Typography } from '@mui/material';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-2'>
      <Typography variant='h5' color='error'>
        404 - Not Found
      </Typography>
      <p>The page you are looking for does not exist.</p>
      <Button
        variant='contained'
        color='primary'
        onClick={() => (window.location.href = '/')}
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
