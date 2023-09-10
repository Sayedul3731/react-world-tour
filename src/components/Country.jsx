import { useState } from 'react';
import './Country.css'
const Country = (country) => {
    const { name, flags, population, area, cca3 } = country.country;
    console.log(country.country);
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className='country'>
            <h3>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'unvisited'}</button>
            { visited && 'I have visited the country.'}
        </div>
    );
};

export default Country;