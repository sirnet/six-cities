import React from "react";
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen'



const App = ({offersCard}) => {

  return (
    <MainScreen offersCard={offersCard}/>
  )

};

App.propTypes = {
  offersCard: PropTypes.arrayOf (
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      marker: PropTypes.string,
      href: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      atribute: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      bookmark: PropTypes.bool,
      tittle: PropTypes.string.isRequired
    }).isRequired,
  ),
};

export default App;


