import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card
} from '@mui/material';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

const style = {
  card: {
    maxWidth: '100%',
    height:'30vh',
    '@media (max-width:1200px)': {
      height:'25vh',
    },
  },
  cardActionArea: {
    display:'flex',
    alignItems:'center',
    height: '100%',
    background: 'rgb(244, 89, 50 )',
    '@media (max-width:900px)': {
      flexDirection:'column'
    },
  },
  cardMedia: {
    width:'50%',
    height: '100%',
    '@media (max-width:600px)': {
      width:'70%',
    },
  },
  body2: {
    '@media (max-width:1200px)': {
      display: 'none'
    },
  }
}


const MainResultSection = ({data}) => {

  const handleClick = (url) => {
    window.open(url);
  }

  return (
    <ThemeProvider theme={theme}>
      <Card 
        onClick={() => handleClick(data.articles[0].url)}
        sx={style.card}>
        <CardActionArea sx={style.cardActionArea}>
          <CardMedia
            sx={style.cardMedia}
            component="img"
            image={data.articles[0].urlToImage}
            alt="article picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {data.articles[0].title}
            </Typography>
            <Typography sx={style.body2} variant="body2" color="text.secondary">
              {data.articles[0].description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}

export default MainResultSection;




// <Box 
//       sx={{
//         width: '100%',
//         height: '30vh',
//         margin: '10px 0',
//         borderRadius: '50px',
//         background: 'red',
//       }}  
//     >
//       <img style={{width:'50%', height: '100%'}} src={data.articles[0].urlToImage} />
//     </Box>



// '@media (max-width:1200px)': {
//   display: 'none'
// },