import React, {useEffect, useState} from "react";
import "./weather.styles.scss";

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
            <h1>Weather component works!!</h1>
        </div>
    )


}

export default Weather;
