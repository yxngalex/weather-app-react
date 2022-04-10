import React, {useEffect, useState} from "react";
import "./weather.styles.scss";
import WeatherForm from "../../component/weather-form/weather-form.component";
import Forecast from "../../component/forecast/forecast-component";
import {getWeatherFor7Days} from "../../services/weather.service";

const Weather = () => {
    const [weather, setWeather] = useState(null);

    const addWeather = (country: string, city: string) => {
        getData(country, city);
        // getAllWeatherByCityAndCountry(city, country).then(data => {
        //     console.log(data);
        //     setWeather(data);
        // });
    }

    // move to backend

    const getData = async (country: string, city: string) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=03efd5d8476a0f5be9ed912e37718985`;
        try {
            let res = await fetch(url);
            let data = await res.json();
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            await getDatafor7days(lat, lon);

            // getWeatherFor7Days(lat, lon).then(data => {
            //     setWeather(data);
            // });
        } catch (error) {
            console.log(error);
        }
    };

    // move to backend

    const getDatafor7days = async (lat: number, lon: number) => {
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=03efd5d8476a0f5be9ed912e37718985&units=metric&cnt=7&exclude=current,hourly`;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setWeather(data.daily);
        } catch (error) {
            console.log(error);
        }
    };

    const style = {
        background: "whitesmoke"
    }

    return (
        <div style={style} className="background">
            <WeatherForm addWeather={addWeather}/>
            {
                weather ? (
                    <Forecast weather={weather}/>
                ) : (
                    <div className="text-center font-bold mt-56 text-3xl text-gray-700">
                        Please select country and enter the city
                    </div>
                )
            }
        </div>
    )


}

export default Weather;
