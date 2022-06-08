import PropTypes from "prop-types";
import "../styles/ForecastSummary.css";
import React from "react";
import WeatherIcon from "react-icons-weather";

function ForecastSummary(props) {
  const { date, description, icon, temperature, onSelect } = props;
  const formattedDate = new Date(date).toDateString();
  // converts the numerical data from forecast.json into readable dates.
  return (
    // content between the div tags is referencing the forcast.json file.
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary_date">{formattedDate}</div>
      <div className="forecast-summary_icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary_temperature">{temperature.max}˚C</div>
      <div className="forecast-summary_description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        More Details
      </button>
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};
