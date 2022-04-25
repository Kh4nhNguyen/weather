import React, {Dispatch, SetStateAction, useState} from "react";

type Props = {
    setCountry:Dispatch<SetStateAction<string>>;
}
const InputWeather = (props:Props) => {
    const [location,setLocation] = useState<string>('')

    return (
        <>
            <input
                value={location}
                placeholder='Nhap dia chi...'
                onChange={(e)=>{setLocation(e.target.value)}}
            />
            <button
                onClick={()=>props.setCountry(location)}
            >Search</button>
        </>
    )
}

export default InputWeather