import React from 'react';

import {
  Box,
  Typography,
} from '@mui/material';



const HeaderSection = () => {
  return (
    <Box
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '1rem',
        borderRadius: '50px',
        width: 'auto',
        height: 300,
        bgcolor: 'rgb(244, 183, 50)',
      }}
    >
      <Typography sx={{textAlign:'center', color:'white' }} variant="h2" component="div" gutterBottom>
        Discover Worldwide News
      </Typography>
    </Box>
  );
}

export default HeaderSection;