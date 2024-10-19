import styled from 'styled-components';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import WeatherForecastInterface from '../interfaces/WeatherForecastInterface';

const Header = styled.p`
    text-align: center;
    color: white;
    `;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const WeatherChart = ({ weatherForecast, selectedDay }: { weatherForecast: WeatherForecastInterface[], selectedDay: string }) => {
    const data: any[] = [];

    // Maps the weather forecast and adds the temperature to the data array
    weatherForecast.map((element) => {
        // If no day is selected, select the first day
        if (selectedDay === "") {
            selectedDay = weatherForecast[0].day;
        }
        // If the day is selected, add the temperature to the data array
        if (element.day === selectedDay) {
            data.push({ hour: element.hour, temperature: element.temperature });
        }
    });

    return (
        <div>
            {selectedDay && <Header>Temperature for {selectedDay}</Header>}
            <Div>
                <LineChart width={500} height={300} data={data}>
                    <XAxis dataKey="hour" stroke="white" />
                    <YAxis stroke="white" />
                    <Line type="monotone" dataKey="temperature" stroke="white" />
                </LineChart>
            </Div>
        </div>
    );
}

export default WeatherChart;