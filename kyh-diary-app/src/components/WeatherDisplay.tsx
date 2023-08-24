import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { weatherState } from '../state/weatherState';

export const WeatherDisplay: React.FC = () =>{

    const [weather, setWeather] = useRecoilState(weatherState);

    useEffect(() => {

    }, []);

    return (
        <div>

        </div>
    )
}