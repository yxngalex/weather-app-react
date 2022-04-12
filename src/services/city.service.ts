import axios from "axios";

export const getCitiesByCountry = async (country: string) => {
    return (await axios.get(`http://localhost:8080/weather/city/${country}`)).data;
}

export const getCityAutocomplete = async (country: string,cityName: string) => {
    return (await axios.get(`http://localhost:8080/weather/city/autocomplete/country/${country}/city/${cityName}`)).data;
}
