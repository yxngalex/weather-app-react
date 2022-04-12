import axios from "axios";

export const getWeather = async (country: string, city: string) => {
    return (await axios.get(`http://localhost:8080/weather/forecast/country/${country}/city/${city}`)).data;
}

export const getWeatherFor7Days = async (lat: string, lon: string) => {
    return (await axios.get(`http://localhost:8080/weather/forecast/lat/${lat}/lon/${lon}`)).data;
}
