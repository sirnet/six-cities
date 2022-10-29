import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { OffersCard } from "./components/mock-date";


ReactDOM.render(
  <App offersCard={OffersCard}/>,
  document.getElementById('root')
);

