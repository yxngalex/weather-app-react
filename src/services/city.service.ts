import axios from "axios";
import {Country} from "../model/country.model";

export const getCitiesByCountry = async (country: Country) => {
    return (await axios.get(`http://localhost:8080/weather/city/${country.countryCode}`)).data;
}

export const getCityAutocomplete = async (country:Country,cityName: string) => {
    return (await axios.get(`http://localhost:8080/weather/city/autocomplete/country/${country.countryCode}/city/${cityName}`)).data;
}
