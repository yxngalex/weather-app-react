import React, {useState} from "react";
import "./weather.styles.scss";
import WeatherForm from "../../component/weather-form/weather-form.component";
import Forecast from "../../component/forecast/forecast-component";
import {getAllWeatherByCityAndCountry} from "../../services/weather.service";

const Weather = () => {
    const [weather, setWeather] = useState(null);

    const addWeather = (country: string, city: string) => {
        getAllWeatherByCityAndCountry(city, country).then(data => {
            console.log(data);
            setWeather(data);
        });
    }

    const style =  {
        background: "linear-gradient(to right, #020024, #00d4ff)"
    }

    return (
        <div style={style} className="background">
                <WeatherForm addWeather={addWeather}/>
                {
                    weather ? (
                        <Forecast/>
                    ) : (
                        <div className="text-center font-bold mt-40 text-xl">Please enter your country and city!
                            :)</div>
                    )
                }
        </div>
    )


}

export default Weather;
