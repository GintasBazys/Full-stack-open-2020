import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Country from "./components/Country";

const App = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")
    const [selectedCountry, setSelectedCountry] = useState("")
    const [showCountry, setShowCountry] = useState(false)

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const filteredCountries = countries.filter(country => {
        return country.name.toLowerCase().includes(search.toLowerCase())
    })

    const handleShowCountry = () => {
        setShowCountry(!showCountry)
    }

    //TODO move to country list component
    let filterElement;

    if ( filteredCountries.length === 1 && selectedCountry !== "") {
        setSelectedCountry("")
        setShowCountry(false)
    }


    if(filteredCountries.length > 10) {
        filterElement = <div>Too many countries. Provide more input</div>
    } else if(filteredCountries.length === 1 || showCountry) {
        if(selectedCountry !== "") {
            const selectedCountryByUser = countries.find(el => el.name === selectedCountry)
            filteredCountries[0] = selectedCountryByUser
        }
        filterElement = <Country country={filteredCountries[0]} />
    }
    else {
        filterElement = filteredCountries.map(country =>
            <p key={country.name}>{country.name} <button onClick={() => {setSelectedCountry(country.name); handleShowCountry() }}>show</button> </p>)
    }

    const handleSearch = event => {
        setSearch(event.target.value)
    }



    return (
        <div>
            find countries <input value={search} onChange={handleSearch} />
            {filterElement}
        </div>
    )

}

export default App;

