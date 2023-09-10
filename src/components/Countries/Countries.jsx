import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountries = country => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedFlags = country => {
        const newVisitedFlags = [...visitedFlags, country]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ol>
                   {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li> )
                   }
                </ol>
            </div>
            <div>
                <h3> Visited Flags: {visitedFlags.length} </h3>
                <div className="flag-container">
                    { visitedFlags.map( country => <img key={country.cca3} src={country.flags.png} alt="" /> )}
                </div>
            </div>
           <div className="country-container">
           {
                countries.map(country => <Country handleVisitedFlags={handleVisitedFlags} handleVisitedCountries={handleVisitedCountries} key={country.cca3} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;