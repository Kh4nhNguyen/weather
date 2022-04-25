import React, {useEffect, useState} from 'react';
import './App.css';
import InputWeather from "./component/InputWeather";
import DisplayWeather from "./component/DisplayWeather";
import weatherApi from "./api/weatherApi";
import Weather from "./interface/weatherInterface";


function App() {
    const [country,setCountry] = useState<string>('')
    const [dataWeather,setDataWeather] = useState<Weather>({
        location:'',
        temp:0,
        weather:''
    })

    useEffect(()=>{
        if(country){
            weatherApi(country)
                .then(res=>{
                    const newWeatherData = {
                        location:res.data.name,
                        temp:res.data.main.temp,
                        weather:res.data.weather[0].description
                    }
                    setDataWeather(newWeatherData)
                    console.log(res )
                })
        }
    },[country])


    return (
        <div className="App">
            <InputWeather setCountry={setCountry}/>
            <DisplayWeather weather={dataWeather}/>
        </div>
    );
}

export default App;
