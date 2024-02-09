export interface IMain {
    temperature: number,
    humidity: number
};

export interface IWeather {
    weather: string
};

export interface IWeatherInfo {
    main: IMain[],
    sys: {
        country: string
    }
    city: string,
    weather: IWeather[]
};