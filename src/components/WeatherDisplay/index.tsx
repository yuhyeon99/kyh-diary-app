import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { weatherState } from '../../state/weatherState';
import { fetchWeatherData } from '../../api/fetchWeatherData';
import './WeatherDisplay.css';

export const WeatherDisplay: React.FC = () =>{

    const [isLoading, setIsLoading] = useState(true);

    const currentDate = new Date();
    const date = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString().substr(2, 2);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

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
                        try{
                            const weatherData = await fetchWeatherData(latitude, longitude);
                            setWeather(weatherData);
                            setIsLoading(false);
                        }catch (error) {
                            console.log(error);
                            setIsLoading(false);
                        }
                    },
                    (error) => {
                        console.error(error);
                        setIsLoading(false);
                    }
                );
            } else {
                console.error('Geolocation is not available');
                setIsLoading(false);
            }
        };

        getLocation();
        
    }, []);

    return (
        <div className="weather-display">
            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-circle"></div>
                </div>
            ) : (
                <>
                    <div className="location">{weather.location}</div>
                    <div className="temperature">{temperatureText}<span>°C</span></div>
                    <div className="description">
                        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="icon" />
                        <p>{weather.description}</p>    
                    </div>
                    <div className="date">
                        <p>{`${year}/${month}/${date} ${dayOfWeek}`}</p>
                    </div>
                </>
            )}
        </div>
    )
}