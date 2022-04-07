import axios from "axios";

export const getAllCountries = async () => {
    return (await axios.get('http://localhost:8080/weather/country')).data;
}
