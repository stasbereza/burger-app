// #Core
import React from 'react';
import PropTypes from 'prop-types';
// #shared
import Card from '../shared/Card';

const StuffingList = ({ stuffing }) => (
  <div className="row">
    {stuffing.map(stuffingItems =>
      Object.values(stuffingItems).map(stuffingItem =>
        stuffingItem.map(ingredient => (
          <Card key={ingredient.id} {...ingredient} />
        )),
      ),
    )}
  </div>
);

StuffingList.propTypes = {
  stuffing: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
};

StuffingList.defaultProps = {
  stuffing: [],
};

export default StuffingList;
