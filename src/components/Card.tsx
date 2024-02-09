import { FC, useEffect, useState } from 'react';


interface CardProps {
    city: string,
    country: string,
    weather: string,
    temperature: number,
    humidity: string
};

export const Card: FC<CardProps> = ({ city, country, weather, temperature, humidity }) => {
    const [minutes, setMinutes] = useState<number>(0);

    const refreshPage = () => {
        window.location.reload();
    }

    const reloadCheck = () => {
        const intervalId = setInterval(() => {
            setMinutes((prevMinutes: number) => prevMinutes + 1);
        }, 60000);
        return () => clearInterval(intervalId);
    }

    useEffect(() => {
        reloadCheck();
    }, []);

    return (
        <article className='w-[600px] h-[300px] border-2 shadow-2xl mr-10 mb-10 flex justify-between flex-col p-3'>
            <div>
                <h1 className='font-semibold text-3xl'>{ city }City</h1>
                <span>{ country }Country</span>
            </div>
            <div className='flex items-center justify-between border-b-2 rounded border-gray-300 w-full'>
                <span>Weather</span>
                <span>{ weather }Text</span>
            </div>
            <div className='flex items-center justify-between border-b-2 rounded border-gray-300 w-full'>
                <span>Temperature</span>
                <span>{ weather }Text &#176;C</span>
            </div>
            <div className='flex items-center justify-between border-b-2 rounded border-gray-300 w-full'>
                <span>Humidity</span>
                <span>{ weather }Text %</span>
            </div>
            <span className='font-semibold ml-auto text-gray-500'>
                { minutes === 0 ? 'last update just now' : `last update ${ minutes } minute ago` }
            </span>
            <button className='text-amber-600 font-semibold ml-auto' onClick={refreshPage}>RELOAD</button>
        </article>
    )
}