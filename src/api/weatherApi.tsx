import axios from "axios";
import Weather from "../interface/weatherInterface";

const KEY_API = '2c0febe2eccee684b4aef6e787887766';
const BASE_API = 'https://api.openweathermap.org/data/2.5/weather';

const weatherApi = (location:string) => {
    const param = {
        appid:KEY_API,
        lang:'vn',
        q:location,
        units:'metric'
    }
    return axios.get(BASE_API,{params:param});
}

export default weatherApi
