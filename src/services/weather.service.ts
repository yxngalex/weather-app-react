import axios from "axios";
import {City} from "../model/city.model";

export const getAllWeatherByCity = async (city: City) => {
    return (await axios.post(`http://localhost:8080/weather`,  city)).data;
}
