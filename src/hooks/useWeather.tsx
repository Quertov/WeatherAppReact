import axios from 'axios';
import { useEffect, useState } from 'react';
import { IWeatherInfo } from '../components/types';

export const useWeather = () => {
    const apiKey = 'f4c887665fc166135dd39bab3e94b568';

    const fetchWeather = () => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    }

    useEffect(() => {
        fetchWeather();
    }, []);
}