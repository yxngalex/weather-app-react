import axios from "axios";
import {City} from "../model/city.model";

export const getAllWeatherByCityAndCountry = async (city: string, country: string) => {
    return (await axios.get(`http://localhost:8080/weather/forecast/country/${country}/city/${city}`)).data;
}
