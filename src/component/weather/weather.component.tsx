import React, {useState} from "react";
import "./weather.styles.scss";
import WeatherForm from "../weather-form/weather-form.component";
import {Country} from "../../model/country.model";
import {City} from "../../model/city.model";
import {getAllWeatherByCityAndCountry} from "../../services/weather.service";

const Weather = () => {
    const [weather, setWeather] = useState(null);

    const addWeather = (country: Country, city: City) => {
        getAllWeatherByCityAndCountry(city.cityName, country.countryCode).then(data => {
            console.log(data);
            setWeather(data);
        });

        console.log(weather);
    }

    return (
        <div>
            <WeatherForm addWeather={addWeather}/>
        </div>
    )


}

export default Weather;
