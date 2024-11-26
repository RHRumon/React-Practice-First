import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    let [Countries, setCountries] = useState([])
    let [visitedCountries, setVisitedCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    let handleVisitedCountry = (country) =>{
        console.log('add this country');
        let newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    return (
        <div>
            <h3>Countries: {Countries.length}</h3>

            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3 }>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="country-container">
            {
                Countries.map(country => <Country key={country.cca3}
                handleVisitedCountry={handleVisitedCountry}
                country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;