import styled from 'styled-components';
import WeatherCard from './WeatherCard';
import WeatherForecastInterface from '../interfaces/WeatherForecastInterface';

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

const WeatherDashboard = ({ weatherForecast, units, setSelectedDay }: { weatherForecast: WeatherForecastInterface[], units: string, setSelectedDay: React.Dispatch<React.SetStateAction<string>> }) => {

    // Find the min and max temperatures for each day for display in the dashboard
    const findMinMaxTemperatures = () => {

        // Groups the weather forecast by day
        const groupedByDay: { [key: string]: number[] } = {};
        weatherForecast.forEach(entry => {
            if (!groupedByDay[entry.day]) {
                groupedByDay[entry.day] = [];
            }
            groupedByDay[entry.day].push(entry.temperature);
        });

        // Find the min and max temperatures for each day
        const minMaxTemperatures = Object.keys(groupedByDay).map(day => {
            const temperatures = groupedByDay[day];
            const minTemp = Math.min(...temperatures);
            const maxTemp = Math.max(...temperatures);

            return {
                day,
                minTemp,
                maxTemp
            };
        });

        return minMaxTemperatures;
    }

    const minMaxTemperatures = findMinMaxTemperatures();
    const unitString = units === 'metric' ? 'ºC' : 'ºF';

    return (
        <Div>
            {minMaxTemperatures.map((weather) => {
                return (
                    <WeatherCard key={weather.day} 
                            day={weather.day} 
                            temperatures={weather.minTemp + unitString + " / " + weather.maxTemp + unitString} 
                            setSelectedDay={setSelectedDay} 
                    />
                );
            })}
        </Div>
    );
}

export default WeatherDashboard;