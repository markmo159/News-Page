import React from "react";

import { 
  Box,
  Typography 
} from '@mui/material'


const style = {
  outerBox: {
    overflow: 'hidden'
  },
  innerBox: {
    display: 'flex',
    width:'100%',
    animation: 'tickerh linear 15s infinite',
    "@keyframes tickerh": {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-100%)' }
    },
    '@media (max-width:1200px)': {
      width:'130%',
    },
    '@media (max-width:900px)': {
      width:'150%',
    },
    '@media (max-width:600px)': {
      width:'200%',
    },
  },
  text: {
    paddingRight: '30px',
    '@media (max-width:1200px)': {
      fontSize: '0.7rem'
    },
    '@media (max-width:900px)': {
      fontSize: '0.6rem'
    },
  }
}

const WeatherDisplay = ({data}) => {
  const showWeather = () => {
    if (data) {
      let weather = data.map((city,index) => {
        return (
          <Typography 
            key={index}
            sx={style.text} 
            variant="caption" 
            display="block" 
            gutterBottom
          >
              {`${city.city} (${city.temp}C)`}
          </Typography>
        );
      })
      return weather
    }
  }

  return (
    <Box
      sx={style.outerBox}
    >
      <Box 
        sx={style.innerBox}
      >
        {showWeather()}
      </Box>
    </Box>
  );
};

export default WeatherDisplay;