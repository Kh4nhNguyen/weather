import React from 'react';
import './App.css';
import InputWeather from "./component/InputWeather";
import DisplayWeather from "./component/DisplayWeather";

function App() {
    return (
        <div className="App">
            <InputWeather/>
            <DisplayWeather weather={{

            }}/>
        </div>
    );
}

export default App;
