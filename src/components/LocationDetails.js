import PropTypes from "prop-types";
import "../styles/App.css";
import React from "react";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1>{`${city}, ${country}`}</h1>
  );
} // Ternary operator to determine what is displayed

export default LocationDetails;

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};
