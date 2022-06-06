import React, { useEffect, useState } from "react";
import "../styles/App.css";
import axios from "axios";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";
import ForecastDetails from "./ForecastDetails";

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

  const getForecast = () => {
    const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

    axios.get(endpoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    });
  }; // HTTP GET request through axios

  useEffect(() => {
    getForecast();
  }, []);

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
