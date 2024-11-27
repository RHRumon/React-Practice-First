import CountryData from "../Country-Data/CountryData";

const CountryDetail = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <h3>Country-Details</h3>
            <hr />
            <CountryData
               country={country}
               handleVisitedCountry={handleVisitedCountry}
               handleVisitedFlags = {handleVisitedFlags}
            ></CountryData>
        </div>
    );
};

export default CountryDetail;