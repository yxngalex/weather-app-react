import React, {useEffect} from "react";
import "./forecast-styles.scss";

type forecastProps = {
    weather?: any;
}

const Forecast = ({weather}: forecastProps) => {

    useEffect(() => {
        getAverageTemperature();
    }, []);


    // const getAverageTemperature = () => {
    //     for (const w in weather.weatherList) {
    //         console.log(w);
    //     }
    // }

    // const getDay = (w: any) => {
    //     let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    //     let date = Date.parse(w);
    //     let d = new Date(date);
    //     console.log(w);
    //
    //     return days[d.getDay()];
    // }

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

    const getAverageTemperature = () => {
        let temp = 0;
        let count = 0;
        for (let i = 0; i < weather; i++) {
            temp += weather[i].temp.day;
            count = temp / i;
        }
        console.log(count);
    }

    return (
        <React.Fragment>
            <div className="mt-36 text-center font-theme">
                <div className="text-gray-700">May 03 2022</div>
                <div className="text-8xl relative">23<span className="text-xl absolute">°C</span></div>
            </div>
            {/*Average temperature form - to*/}
            <div className="mt-36 flex text-center align-middle justify-center font-theme">
                {
                    weather.slice(1).map((w: any, index: number) =>
                        <div key={index}>
                            <div className="text-gray-700 mx-6 uppercase text-lg">{getWeekday(index)}</div>
                            <div className="text-2xl relative">{parseInt(w.temp.day)}<span
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
