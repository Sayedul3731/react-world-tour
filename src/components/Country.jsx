import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const { name, flags, population, area, cca3 } = country;
    console.log(country);
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name: <span style={{ color : visited ? 'red' : 'black'}}>{name?.common}</span> </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>

            <button onClick={() => handleVisitedFlags(country)}>Add flag</button>
            <br /> <br />

            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'unvisited'}</button>
            { visited && 'I have visited the country.'}
        </div>
    );
};

export default Country;