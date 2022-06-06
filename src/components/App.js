import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date); // Defaulted to the the first forecast date
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  // Searches through the array of forecasts and returns the matching value
  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
}

export default App;

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
