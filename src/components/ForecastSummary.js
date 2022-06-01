import PropTypes from "prop-types";
// import "../styles/App.css";
import React from "react";

function ForecastSummary(props) {
  const { date, description, icon, temperature } = props;
  return (
    // content between the div tags is referencing the forcast.json file.
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary_date">{date}</div>
      <div className="forecast-summary_icon" data-testid="forecast-icon">
        {icon}
      </div>
      <div className="forecast-summary_temperature">{temperature.max}˚C</div>
      <div className="forecast-summary_description">{description}</div>
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
};
