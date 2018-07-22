// #Core
import React from 'react';
import PropTypes from 'prop-types';
// #Components
import Burger from 'components/Burger';

const BurgerList = ({ burgers }) => (
  <div className="row">
    {burgers.map(burger => <Burger key={burger.id} {...burger} />)}
  </div>
);

BurgerList.propTypes = {
  burgers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      picture: PropTypes.string,
      size: PropTypes.string,
      stuffing: PropTypes.arrayOf(PropTypes.string),
      toppings: PropTypes.arrayOf(PropTypes.string),
      desc: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
};

BurgerList.defaultProps = {
  burgers: [],
};

export default BurgerList;
