import React from "react";
import Weather from "./Weather";

const Country  = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h1>Languages</h1>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt="country flag" height="180" width="80"/>
            <h1>Weather in {country.name}</h1>
            <Weather capital={country.capital} />
        </div>
    )
}

export default Country;