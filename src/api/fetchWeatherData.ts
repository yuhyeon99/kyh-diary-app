import axios from 'axios';
import { Weather } from '../types/types';


export const fetchWeatherData = async (latitude: number, longitude: number): Promise<Weather> => {
    try {
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=kr&appid=${apiKey}`;
        
        const response = await axios.get(apiUrl);

        if (response.status !== 200) {
            throw new Error('API를 정상적으로 불러오지 못했습니다.');
        }

        const data = await response.data;
        const weatherData: Weather = {
            location: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
        };

        return weatherData;
    } catch (error: any) {
        throw new Error(`날씨 API 요청 중 오류: ${error.message}`);
    }
};