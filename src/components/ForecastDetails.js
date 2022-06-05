import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forcast-details">
      <div className="forecast-details_date">{formattedDate}</div>
      <div className="forecast-details_temp">{temperature.min}˚C</div>
      <div className="forecast-details_temp">{temperature.max}˚C</div>
      <div className="forecast-details_humidity">{humidity}</div>
      <div className="forecast-details_wind">
        {wind.speed}
        {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
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
