import React, {useEffect, useState} from "react";
import axios from "axios";

const Weather = ({ capital }) => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                console.log(response.data)
                setData(response.data.main)
            })
        // fetch("https://jsonplaceholder.typicode.com/users" )
        //     .then(response => response.json())
        //     .then(response => console.log(response))
    }, [capital])

    return (
        <div>
            <p>temperature: {Math.floor(data.temp-273.15)} celcius feels like: {Math.floor(data.feels_like-273.15)}</p>
            <p>humidity: {data.humidity}</p>
            <p>pressure: {data.pressure}</p>
        </div>
    )
}

export default Weather