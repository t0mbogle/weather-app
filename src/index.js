import React from "react";
// Imports the react library so it is in scope
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import forecast from "./data/forcast.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App location={forecast.location} forecasts={forecast.forecasts} />
  </React.StrictMode>
);
