import PropTypes from "prop-types";
import "../styles/App.css";
import React from "react";

function LocationDetails(props) {
  const { city, country } = props;
  return <h1>{`${city}, ${country}`}</h1>;
}

export default LocationDetails;

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
