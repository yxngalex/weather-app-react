import React, {useEffect, useState} from "react";
import "./weather.styles.scss";
import WeatherForm from "../weather-form/weather-form.component";

const Weather = () => {
    const [weather, setWeather] = useState([]);
    // const [country, setCountry] = useState([]);
    // const [city, setCity] = useState([]);
    //
    // useEffect(() => {
    //     let mounted = true;
    //     getAllWeatherByCity(city).then(weather => {
    //         if (mounted) {
    //             setWeather(weather);
    //         }
    //     });
    //     return () => mounted = false;
    // }, []);
    //
    return (
        <div>
            <WeatherForm />
        </div>
    )


}

export default Weather;
