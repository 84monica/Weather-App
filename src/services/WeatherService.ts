import axios from 'axios';

const API_KEY = '07b79850b6c437d32df12191e652848a';

export const fetchWeatherForecast = async (city: string, units: string) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        return {
            message: (error as any).response?.data?.message || 'An error occurred while fetching the weather forecast',
            data: null
        };
    }
};