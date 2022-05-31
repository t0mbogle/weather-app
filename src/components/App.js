/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import "../styles/App.css";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";

function App({ location, forecasts }) {
  const { city, country } = location;
  // destructures prop
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
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
