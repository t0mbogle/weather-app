import React from "react";
import "../styles/ForecastDetails.css";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forcast-details">
      <div className="forecast-details_date">
        <b>Date:</b> {formattedDate}
      </div>
      <div className="forecast-details_temp">
        <b>Max Temperature:</b> {temperature.max}˚C
      </div>
      <div className="forecast-details_temp">
        <b>Min Temperature:</b> {temperature.min}˚C
      </div>
      <div className="forecast-details_humidity">
        <b>Humidity:</b> {humidity}&#37;
      </div>
      <div className="forecast-details_wind">
        <b>Wind:</b> {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  // Error in console: failed prop type
  forecast: PropTypes.shape(
    PropTypes.shape({
      date: PropTypes.string,
      humidity: PropTypes.number,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
      wind: PropTypes.shape({
        speed: PropTypes.number,
        direction: PropTypes.string,
      }),
    })
  ).isRequired,
};
