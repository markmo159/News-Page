import React, { useEffect, useState } from "react";
import WeatherData from "../../Data/WeatherData";
import WeatherDisplay from "./WeatherDisplay";

import { Container } from "@mui/material";

const cities = [
  "New York",
  "Paris",
  "Madrid",
  "Berlin",
  "London",
  "Rome",
  "Jerusalem",
  "Moscow",
  "Beijing",
];
 

const WeatherSection = () => {
  const [citiesWeather, setCitiesWeather] = useState([]);

  useEffect(() => {
    const findWeather = async (cityName) => {
      const response = await WeatherData(cityName);
      let result = {
        city: `${response.data.name}`,
        temp: `${parseInt(response.data.main.temp)}`
      };
      setCitiesWeather((prevValue) => [
          ...prevValue,
          result,
        ]);
    };

    cities.map((cityName) => {
      return findWeather(cityName);
    });
  }, []);

  return (
    <Container>
      {citiesWeather.length === 9 ? <WeatherDisplay data={citiesWeather} /> : ''}
    </Container>
  );
};

export default WeatherSection;
