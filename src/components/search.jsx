import { useState, useEffect } from "react";
import axios from "axios";
import "./search.css";

function Search() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [population, setPopulation] = useState(null);
  const [flagUrl, setFlagUrl] = useState("");

  // Fetch all countries and their cities
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then((response) => {
        const uniqueCountries = Array.from(
          new Set(response.data.data.map((item) => item.country))
        );
        setCountries(uniqueCountries);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // Fetch cities and flag when country changes
  useEffect(() => {
    if (selectedCountry) {
      axios
        .get("https://countriesnow.space/api/v0.1/countries/population/cities")
        .then((response) => {
          const filteredCities = response.data.data.filter(
            (item) => item.country === selectedCountry
          );
          setCities(filteredCities.map((item) => item.city));
        })
        .catch((error) => console.error("Error fetching cities:", error));

      axios
        .post("https://countriesnow.space/api/v0.1/countries/flag/images", {
          country: selectedCountry,
        })
        .then((response) => {
          if (response.data && response.data.data) {
            setFlagUrl(response.data.data.flag);
          }
        })
        .catch((error) => console.error("Error fetching flag:", error));
    } else {
      setCities([]);
      setFlagUrl("");
    }
  }, [selectedCountry]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);

    axios
      .get("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then((response) => {
        const cityData = response.data.data.find(
          (item) => item.city === city && item.country === selectedCountry
        );
        if (cityData && cityData.populationCounts) {
          setPopulation(cityData.populationCounts[0].value);
        }
      })
      .catch((error) => console.error("Error fetching population:", error));
  };

  return (
    <div className="search-con">
      <div className="input-box">
        <div className="input-group">
          <label>Country</label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Enter the Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label>City</label>
          <select
            value={selectedCity}
            onChange={(e) => handleCitySelect(e.target.value)}
            disabled={!selectedCountry}
          >
            <option value="">Enter City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <button className="view-results">View Results</button>
      </div>

      <div className="result-box">
        <div className="result-group">
          <label>Country</label>
          <p>{selectedCountry || "N/A"}</p>
        </div>
        <div className="result-group">
          <label>City</label>
          <p>{selectedCity || "N/A"}</p>
        </div>
        <div className="result-group">
          <label>Population</label>
          <p>{population ? population.toLocaleString() : "N/A"}</p>
        </div>
        <div className="result-group">
          <label>Flag</label>
          {flagUrl ? (
            <img src={flagUrl} alt="Country Flag" className="flag-img" />
          ) : (
            <p>N/A</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;