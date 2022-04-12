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
        <React.Fragment>
            <div className="mt-36 text-center font-theme">
                <div className="text-gray-700 uppercase">This Weeks Average Temperature</div>
                <div className="text-8xl relative">{avg}<span
                    className="text-xl absolute">°C</span></div>
            </div>
            <div className="mt-36 flex text-center align-middle justify-center font-theme">
                {
                    weather.slice(1).map((w: any, index: number) =>
                        <div key={index}>
                            <div className="text-gray-700 mx-6 uppercase text-lg">{getWeekday(index)}</div>
                            <div className="text-2xl relative">{Math.floor(w.temp.day)}<span
                                className="text-xs absolute">°C</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default Forecast;
