import React from 'react';
import HeaderSection from '../sections/Header/HeaderSection';
import SearchAndResultsSection from '../sections/Search and Results/SearchAndResultsSection';
import WeatherSection from '../sections/WeatherSection/WeatherSection';


const App = () => {
  return (
    <div>
      <WeatherSection />
      <HeaderSection />
      <SearchAndResultsSection />
    </div>
  );
}

export default App;
