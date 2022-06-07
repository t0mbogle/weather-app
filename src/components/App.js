import React, { useEffect, useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import SearchForm from "./SearchForm";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";

// Change this to const ES6 syntax after other changes
function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0); // App no longer recieves forecasts so 0 is the new default value
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Renders searchText(defualt) as dependancy array

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  ); // Searches through the array of forecasts and returns the matching value

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = (event) => {
    event.preventDefault(); // Disables the action of calling the defualt location onSubmit
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  }; // Makes another HTTP request to getForecast

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
        // This now gives ForecastSummaries component access to the prop 'onForecastSelect'
      />
      {selectedForecast && (
        <ForecastDetails
          forecast={selectedForecast} /* Conditional rendering */
        />
      )}
    </div>
  );
}

export default App;
