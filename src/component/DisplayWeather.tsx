import React, {FC} from "react";
import Weather from "../interface/weatherInterface";

type DisplayWeatherProps = {
    weather: Weather
}

const DisplayWeather: FC<DisplayWeatherProps>= ({weather}) => {
    console.log(weather)
    return (
        <>
            <h1>{weather.location}</h1>
            <h1>{weather.temp}</h1>
            <h1>{weather.weather}</h1>
        </>
    )
}

export default DisplayWeather