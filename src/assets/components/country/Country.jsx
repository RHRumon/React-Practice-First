import { useState } from 'react';
import './Country.css'
import CountryDetail from '../Country-Detail/CountryDetail';
const Country = ({ country , handleVisitedCountry, handleVisitedFlags}) => {
//   console.log(country);
// console.log(handleVisitedCountry);
// console.log('add this country');

  let { name, flags,population,area, cca3 } = country;

  let [visited, setVisited] = useState(false)

  let handleVisit = () =>{
    setVisited(!visited); // toggle
  }

  

  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <h3 style={{color: visited ? 'black' : 'red'}}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>{cca3}</small></p>
      <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <button onClick={handleVisit}>{visited ? 'Visited': 'Going'}</button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
      {visited && 'I have visited this country'}
      <hr />
      <CountryDetail
          country = {country}
          handleVisitedCountry = {handleVisitedCountry}
          handleVisitedFlags = {handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
