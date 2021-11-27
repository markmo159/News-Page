import axios from "axios";

const WeatherData = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}${city==='New York'? ',US' : ''}&units=metric&appid=1500bee8cdc86f2fda974240cd7a2253`
  );
  return response
}

export default WeatherData;