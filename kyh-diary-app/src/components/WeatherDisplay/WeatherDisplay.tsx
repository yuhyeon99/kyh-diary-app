import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { weatherState } from '../../state/weatherState';
import { Weather } from '../../types/types';
import './WeatherDisplay.css';

export const WeatherDisplay: React.FC = () =>{

    const [weather, setWeather] = useRecoilState(weatherState);
    const temperature = weather.temperature;
    const roundedTemperature = Math.round(temperature * 10) / 10;
    const temperatureText = `${roundedTemperature.toFixed(1)}`;

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

    return (
        <div className="weather-display">
            
            <div className="location">{weather.location}</div>
            <div className="temperature">{temperatureText}<span>°C</span></div>
            <div className="description">
                <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="icon" />
                <p>{weather.description}</p>
            </div>
        </div>
    )
}