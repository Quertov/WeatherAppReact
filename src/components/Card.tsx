import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IWeatherInfo } from '../components/types';
import { Loading } from './Loading';


interface CardProps {
    city: string,
};

export const Card: FC<CardProps> = ({ city }) => {
    const apiKey = 'f4c887665fc166135dd39bab3e94b568';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const [minutes, setMinutes] = useState<number>(0);
    const [isLoading, setLoading] = useState(false);

    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState('');
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);

    const reloadCheck = () => {
        if (minutes === 30) {
            refreshPage();
            return;
        }

        const intervalId = setInterval(() => {
            setMinutes((prevMinutes: number) => prevMinutes + 1);
        }, 60000);
        return () => clearInterval(intervalId);
    }

    const fetchWeather = async () => {
        setLoading(true);
        setMinutes(0);
        try {
            const response = await axios.get<IWeatherInfo>(apiUrl);
            const data = await response.data;

            setCountry(data.sys.country);
            setWeather(data.weather[0].main);
            setTemperature(data.main.temp);
            setHumidity(data.main.humidity);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(`Error:\n   ${error}`);
        }
    }

    const refreshPage = () => {
        fetchWeather();
    }

    useEffect(() => {
        reloadCheck();
        fetchWeather();
    }, []);

    return (
        <>
            { isLoading 
            ? <Loading /> 
            : <>
                <article className='w-[600px] h-[300px] border-2 shadow-2xl mr-10 mb-10 flex justify-between flex-col p-3'>
                    <div>
                        <h1 className='font-semibold text-3xl'>{ city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() }</h1>
                        <span>{ country }</span>
                    </div>
                    <div className='flex items-center justify-between border-b-2 rounded border-gray-300 w-full'>
                        <span>Weather</span>
                        <span>{ weather }</span>
                    </div>
                    <div className='flex items-center justify-between border-b-2 rounded border-gray-300 w-full'>
                        <span>Temperature</span>
                        <span>{ Math.round(temperature - 273.15) }&#176;C</span>
                    </div>
                    <div className='flex items-center justify-between border-b-2 rounded border-gray-300 w-full'>
                        <span>Humidity</span>
                        <span>{ humidity }%</span>
                    </div>
                    <span className='font-semibold ml-auto text-gray-500'>
                        { minutes === 0 ? 'last update just now' : `last update ${ minutes } minute ago` }
                    </span>
                    <button className='text-amber-600 font-semibold ml-auto' onClick={ refreshPage }>RELOAD</button>
                </article>
                
            </> }
        </>
    )
}