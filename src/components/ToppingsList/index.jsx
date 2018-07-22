// #Core
import React from 'react';
import PropTypes from 'prop-types';
// #shared
import Card from '../shared/Card';

const ToppingsList = ({ toppings }) => (
  <div className="row">
    {toppings.map(topping => <Card key={topping.id} {...topping} />)}
  </div>
);

ToppingsList.propTypes = {
  toppings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
};

ToppingsList.defaultProps = {
  toppings: [],
};

export default ToppingsList;
