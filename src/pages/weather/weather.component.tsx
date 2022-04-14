import React, {useEffect, useState} from "react";
import "./weather.styles.scss";
import WeatherForm from "../../component/weather-form/weather-form.component";
import Forecast from "../../component/forecast/forecast-component";
import {getWeather, getWeatherFor7Days} from "../../services/weather.service";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [avgTemperature, setAvgTemperature] = useState(0);
    const [bg, setBg] = useState("");

    useEffect(() => {
        if (avgTemperature === 0) {
            setBg("linear-gradient(90deg, rgba(156,221,253,1))")
        } else if (avgTemperature > 0 && avgTemperature < 10) {
            setBg("linear-gradient(90deg, rgba(156, 221, 253, 1) 50%, rgba(255, 214, 108, 1) 100%)")
        } else if (avgTemperature > 10 && avgTemperature < 20) {
            setBg("linear-gradient(90deg, rgba(156, 221, 253, 1) 50%, rgba(255, 214, 108, 1) 100%)")
        } else if (avgTemperature > 20 && avgTemperature < 30) {
            setBg("linear-gradient(90deg, rgba(255, 214, 108, 1) 50%, rgba(156, 221, 253, 1) 100%)")
        } else if (avgTemperature > 30) {
            setBg("linear-gradient(90deg, rgba(156, 221, 253, 1) 100%")
        } else if (avgTemperature < 0 && avgTemperature > -10) {
            setBg("linear-gradient(90deg, rgba(23, 156, 231, 1) 50%, rgba(156, 221, 253, 1) 100%)")
        } else if (avgTemperature < -10 && avgTemperature > -20) {
            setBg("linear-gradient(90deg, rgba(13, 60, 138, 1) 50%, rgba(23, 156, 231, 1) 100%)")
        } else if (avgTemperature > 0 && avgTemperature < 40) {
            setBg("linear-gradient(90deg, rgba(156, 221, 253, 1) 0%, rgba(254, 152, 90, 1) 100%)")
        } else if (avgTemperature > 0 && avgTemperature < 40) {
            setBg("linear-gradient(90deg, rgba(156, 221, 253, 1) 0%, rgba(254, 152, 90, 1) 100%)")
        } else if (avgTemperature < 0 && avgTemperature >= -40) {
            setBg("linear-gradient(90deg, rgba(13,60,138,1) 0%, rgba(156, 221, 253, 1) 50%)")
        }
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

    const style = {
        background: bg
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
