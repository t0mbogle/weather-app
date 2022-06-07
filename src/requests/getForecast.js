import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  let endpoint = "https://mcr-codes-weather.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  } // Updates the URI if there is a city inputted by user

  return axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
  });
}; // HTTP GET request through axios

export default getForecast;
