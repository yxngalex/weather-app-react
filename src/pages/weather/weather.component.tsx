import React, {useEffect, useState} from "react";
import WeatherForm from "../../components/weather-form/weather-form.component";
import Forecast from "../../components/forecast/forecast-component";
import {getWeather, getWeatherFor7Days} from "../../services/weather.service";

import "./weather.styles.scss";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [avgTemperature, setAvgTemperature] = useState(0);
    const [bg, setBg] = useState("");

    useEffect(() => {
        getTemperatureClass();
    }, [avgTemperature]);

    const addWeather = (country: string, city: string) => {
        getWeather(country, city).then(data => {
            getWeatherFor7Days(data.lat, data.lon).then(d => {
                setWeather(d.daily);
                getAverageTemperature(d);
            });
        });
    }

    const getAverageTemperature = (w: any) => {
        let temps = w.daily.slice(2).map((w: any) => w.temp.day);

        let sum = temps.reduce((sum: number, num: number) => sum + num, 0);
        let mean = sum / temps.length;

        setAvgTemperature(Math.floor(mean));
    }

    const getTemperatureClass = () => {
        if (avgTemperature < 0) {
            setBg(`wm-${avgTemperature % 10 < 5 ? String(avgTemperature)[0] : String(avgTemperature - 6)[0]}0`);
        } else if (avgTemperature > 0) {
            setBg(`wp-${avgTemperature % 10 < 5 ? String(avgTemperature)[0] : String(avgTemperature + 6)[0]}0`);
        } else {
            setBg("w-0");
        }
    }

    return (
        <div className={`bg-forecast ${bg}`}>
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
