import React from "react";
import "./forecast-styles.scss";

type forecastProps = {
    weather?: any;
    avg?: number;
}

const Forecast = ({weather, avg}: forecastProps) => {

    const getWeekday = (num: number) => {
        switch (num) {
            case 0:
                return "Monday";
            case 1:
                return "Tuesday";
            case 2:
                return "Wednesday";
            case 3:
                return "Thursday";
            case 4:
                return "Friday";
            case 5:
                return "Saturday";
            case 6:
                return "Sunday";
        }
    }

    return (
        <div className="forecast">
            <div className="mt-36 text-center font-theme">
                <div className="text-gray-700 uppercase">Average Temperature For The Next 5 Days</div>
                <div className="text-8xl relative text-white">{avg}<span
                    className="text-xl absolute">°C</span></div>
            </div>
            <div className="mt-36 flex text-center align-middle justify-center font-theme weather">
                {
                    weather.slice(1).map((w: any, index: number) =>
                        <div key={index}>
                            <div className="text-gray-700 mx-6 uppercase text-lg">{getWeekday(index)}</div>
                            <div className="text-2xl relative text-white">{Math.floor(w.temp.day)}<span
                                className="text-xs absolute">°C</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Forecast;
