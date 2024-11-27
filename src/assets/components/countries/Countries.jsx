import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    let [Countries, setCountries] = useState([]);
    let [visitedCountries, setVisitedCountries] = useState([]);

    let [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    let handleVisitedCountry = (country) => {
        console.log('add this country');
        let newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    let handleVisitedFlags = (flag) => {
        console.log('Adding Flag');
        let newVisitedFlag = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlag);
    }

    return (
        <div>
            <h3>Countries: {Countries.length}</h3>

            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                {/*Display Visited Country */}
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3 }>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>

            {/* display countries */}
            <div className="country-container">
            {
                Countries.map(country => <Country key={country.cca3}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
                country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;