/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;
  // destructures prop
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={city} country={country} />
    </div>
  );
}

export default App;

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
