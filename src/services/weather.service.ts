import axios from "axios";

export const getWeatherFor7Days = async (lat: string, lon: string) => {
    return (await axios.get(`http://localhost:8080/weather/forecast/lat/${lat}/lon/${lon}`)).data;
}
