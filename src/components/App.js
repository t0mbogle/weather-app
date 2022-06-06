import React, { useEffect, useState } from "react";
import "../styles/App.css";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";

// Change this to const ES6 syntax after other changes
function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0); // App no longer recieves forecasts so 0 is the new default value

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  ); // Searches through the array of forecasts and returns the matching value

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []); // Importing axios HTTP request from requests/getForecast

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
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
