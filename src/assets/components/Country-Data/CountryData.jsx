const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    let {name} = country;
    return (
        <div>
            <h3>Name: {name.common}</h3>
        </div>
    );
};

export default CountryData;