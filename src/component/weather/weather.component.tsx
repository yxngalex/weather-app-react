import React, {useState} from "react";
import "./weather.styles.scss";
import WeatherForm from "../weather-form/weather-form.component";
import {Country} from "../../model/country.model";
import {City} from "../../model/city.model";
import {getAllWeatherByCityAndCountry} from "../../services/weather.service";

const Weather = () => {
    const [weather, setWeather] = useState([]);

    const addWeather = (country: Country, city: City) => {
        console.log("clicked");
        console.log(country);
        console.log(city);
        getAllWeatherByCityAndCountry(city, country.countryCode).then(data => {setWeather(data)});
        console.log(weather)
    }

    return (
        <div>
            <WeatherForm addWeather={addWeather}/>
        </div>
    )


}

export default Weather;
