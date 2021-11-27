import React, {useState, useEffect} from 'react';

import ResultsSection from './ResultsSection';
import FetchData from '../../Data/FetchData';
import ErrorMessage from '../../ErrorMessages/ErrorMessage';

import { 
  endpoints, 
  languages, 
  sortBy, 
  categories, 
  countries 
} from '../../Data/SearchQueries'

import { Container, 
  Box,
  TextField,
  MenuItem,
} from '@mui/material';


const SearchAndResultsSection = () => {
  const [data, setData] = useState()
  const [search, setSearch] = useState('')
  const [endpoint, setEndpoint] = useState('everything');
  const [language, setLanguage] = useState('en');
  const [sorting, setSorting] = useState('publishedAt');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect (() => {
    const firstLoad = async () => {
      const response = await FetchData();
    setData(response)
    };
    firstLoad()
  },[])


  useEffect(() => {
    const makeSearch = async () => {
      const response = await FetchData(endpoint, search, language, sorting, category, country);
    setData(response)
    };
    
    const searchTimeOut = setTimeout(() => {
      if ((endpoint === 'everything' && search) || endpoint ==='top-headlines') {
        makeSearch()
      } else if (endpoint ==='top-headlines') {
        makeSearch()
      }
    },500)

    return () => {
      clearTimeout(searchTimeOut)
    }
  },[endpoint, search, language, sorting, category, country]);


  const handleChange = (event) => {
    if(event.target.name === 'endpoint'){
      setEndpoint(event.target.value);
      setIsDisabled(!isDisabled)
    }
    if(event.target.name === 'language'){
      setLanguage(event.target.value);
    }
    if(event.target.name === 'sorting'){
      setSorting(event.target.value);
    }
    if(event.target.name === 'category'){
      setCategory(event.target.value);
    }
    if(event.target.name === 'country'){
      setCountry(event.target.value);
    }
  };


  const searchResults = () => {
    if (data) {
      if (data.data.status === 'error'){
        return (
          <ErrorMessage title= {`Error ${data.status}`} body = {data.data.message} />
        );
      } else if(data.data.totalResults) {
        return <ResultsSection data={data.data}/>
      } else {
        return (
          <ErrorMessage title= {'No results found'} body = {'Please change your categories or search term'} />
        )
      }
    }
  }

  return (
    <Container fixed>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          sx={{ width: 200 }}
          size = 'small'
          id="outlined"
          select
          label="Select"
          name='endpoint'
          value={endpoint}
          onChange={handleChange}
        >
          {endpoints.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          required
          id="outlined"
          label="Search"
          onChange={(e) =>{ 
            setSearch(e.target.value)
          }}
        />
          <TextField 
            disabled={!isDisabled}
            sx={{ width: 200 }}
            size = 'small'
            id="outlined"
            select
            name='language'
            label="Language"
            value={language}
            onChange={handleChange}
          >
            {languages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            disabled={!isDisabled}
            sx={{ width: 200 }}
            size = 'small'
            id="outlined"
            select
            name='sorting'
            label="Sort by"
            value={sorting}
            onChange={handleChange}
          >
            {sortBy.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        <TextField
          disabled={isDisabled}
          sx={{ width: 200 }}
          size = 'small'
          id="outlined"
          name='category'
          select
          label="Category"
          value={category}
          onChange={handleChange}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          disabled={isDisabled}
          sx={{ width: 200 }}
          size = 'small'
          id="outlined"
          name="country"
          select
          label="Country"
          value={country}
          onChange={handleChange}
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
    {searchResults()}
    </Container>
  );
}

export default SearchAndResultsSection;