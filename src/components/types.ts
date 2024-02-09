interface IWeather {
    main: string
};

export interface IWeatherInfo {
    main: {
        temp: number,
        humidity: number
    },
    sys: {
        country: string
    }
    name: string,
    weather: IWeather[]
};