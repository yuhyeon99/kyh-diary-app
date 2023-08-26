import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { weatherState } from '../state/weatherState';
import { Weather } from '../types/types';

export const WeatherDisplay: React.FC = () =>{

    const [weather, setWeather] = useRecoilState(weatherState);

    useEffect(() => {
        // 사용자 위치 정보 출력 함수 (브라우저 Geolocation API 활용)
        const getLocation = () => {
            if('geolocation' in navigator){
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        await fetchWeatherData(latitude, longitude);
                    },
                    (error) => {
                        console.error(error);
                    }
                );
            } else {
                console.error('Geolocation is not available');
            }
        };

        getLocation();
        
    }, []);

    const fetchWeatherData = async (latitude: number, longitude: number) => {
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=kr&appid=${apiKey}`
        )
        const data = await response.json();
        const weatherData: Weather = {
            location: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
        };

        setWeather(weatherData);
    };

    if(!weather) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>오늘의 날씨</h2>
            <p>지역: {weather.location}</p>
            <p>온도: {weather.temperature}</p>
            <p>날씨: {weather.description} <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="" /></p>
        </div>
    )
}