import React, {useState} from "react";
import "./weather.styles.scss";
import WeatherForm from "../../component/weather-form/weather-form.component";
import Forecast from "../../component/forecast/forecast-component";
import {getWeather, getWeatherFor7Days} from "../../services/weather.service";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [avgTemperature, setAvgTemperature] = useState(0);

    const addWeather = (country: string, city: string) => {
        getWeather(country, city).then(data => {
            getWeatherFor7Days(data.lat, data.lon).then(d => {
                setWeather(d.daily);
                getAverageTemperature(d);
            });
        });
    }

    const getAverageTemperature = (w: any) => {
        let temps = w.daily.slice(1).map((w: any) => w.temp.day);

        let sum = temps.reduce((sum: number, num: number) => sum + num, 0);
        let mean = sum / temps.length;

        setAvgTemperature(Math.floor(mean));
    }

    const style = {
        background: "whitesmoke"
    }

    return (
        <div style={style} className="background">
            <WeatherForm addWeather={addWeather}/>
            {
                weather ? (
                    <Forecast weather={weather} avg={avgTemperature}/>
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
