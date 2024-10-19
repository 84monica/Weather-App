import { useState, useEffect } from 'react';
import InputCityName from './components/InputCityName';
import WeatherDashboard from './components/WeatherDashboard';
import WeatherForecastInterface from './interfaces/WeatherForecastInterface';
import styled from 'styled-components';
import WeatherChart from './components/WeatherChart';
import { fetchWeatherForecast } from './services/WeatherService';
import SwitchButton from './components/SwitchButton';
import { FaCloudSun } from "react-icons/fa";

const Header = styled.h1`
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
`;

const App = () => {
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecastInterface[]>([]); // Weather forecast for the next 5 days (3-hour intervals)
  const [cityName, setCityName] = useState(""); // City name selected by the user
  const [units, setUnits] = useState("metric"); // Temperature units (metric - ºC or imperial - ºF)
  const [selectedDay, setSelectedDay] = useState(""); // Day selected by the user (to show on the weather chart)

  // Fetch the weather forecast when the city name or the units change
  useEffect(() => {
    const getWeatherData = async () => {
      if (cityName) {
        const response = await fetchWeatherForecast(cityName, units);

        if (response.cod !== '200') // If the response code is not 200, show an alert with the message
          return alert(response.message);

        // Populate the weather forecast with the data from the response
        const weatherForecast: WeatherForecastInterface[] = response.list.map((element: any) => ({
          day: element.dt_txt.split(' ')[0], // Get the date 
          hour: element.dt_txt.split(' ')[1], // Get the time
          temperature: element.main.temp // Get the temperature
        }));

        setWeatherForecast(weatherForecast);
      }
    };

    getWeatherData();
  }, [cityName, units]);

  return (
    <div>
      <Header> <FaCloudSun /> Weather App <FaCloudSun /> </Header>

      {/* Input field to enter the city name */}
      <InputCityName setCityName={setCityName} />

      {/* Switch button to change the temperature units */}
      <SwitchButton setUnits={setUnits} />

      {/* Current Temperature */}
      <Header>{weatherForecast && weatherForecast.length > 0 ? "Current Temperature: " + weatherForecast[0].temperature : ""} </Header>

      {/* Displays chart for the selected day */}
      <WeatherChart weatherForecast={weatherForecast} selectedDay={selectedDay} />

      {/* Displays the weather forecast dashboard for the next 5 days */}
      <WeatherDashboard weatherForecast={weatherForecast} units={units} setSelectedDay={setSelectedDay} />
    </div>
  );
};

export default App;
