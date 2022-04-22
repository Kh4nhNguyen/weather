import React, {FC} from "react";

type Weather = {

}

type DisplayWeatherProps = {
    weather: Weather
}


const DisplayWeather: FC<DisplayWeatherProps>= () => {
    return (
        <>
            <h1>Vi tri</h1>
            <h1>Nhiet do</h1>
            <h1>Thoi tiet</h1>
            <h1></h1>
        </>
    )
}

export default DisplayWeather