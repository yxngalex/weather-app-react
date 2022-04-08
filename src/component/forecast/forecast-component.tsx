import React from "react";

type forecastProps = {
    weather?: any;
}

const Forecast = ({weather}: forecastProps) => {

    return (
        <React.Fragment>
            {
                weather?.weatherList.map((forecast: any) => (
                        <div>
                            <div>{forecast?.list?.dt_text}</div>
                            <div>{forecast?.list?.temp}°C</div>
                        </div>
                    )
                )
            }
        </React.Fragment>
    )
}

export default Forecast;
