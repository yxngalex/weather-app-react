import axios from "axios";
import {Country} from "../model/country.model";

export const getCitiesByCountry = async (country: Country) => {
    return (await axios.get(`http://localhost:8080/city/${country.countryCode}`)).data;
}
