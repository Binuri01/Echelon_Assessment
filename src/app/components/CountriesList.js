const CountriesList = ({ countries }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {countries.map((country) => (
          <div key={country.code} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold">{country.name} ({country.code})</h2>
            <p className="text-gray-600">Continent: {country.continent.name}</p>
            <p className="text-gray-600">
              Language: {country.languages.length > 0 ? country.languages[0].name : "Unknown"}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CountriesList;
  