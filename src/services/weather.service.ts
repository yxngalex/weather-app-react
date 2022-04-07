import axios from "axios";
import {City} from "../model/city.model";

export const getAllWeatherByCityAndCountry = async (city: City, country: string) => {
    return (await axios.post(`http://localhost:8080/weather/forecast/${country}`,  city)).data;
}
