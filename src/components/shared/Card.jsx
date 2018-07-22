// #Core
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ picture, name, price }) => (
  <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={picture} alt="stuffing" />
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p>Price: {price} UAH</p>
        </div>
      </div>
    </div>
);

Card.propTypes = {
  picture: PropTypes.string,
  name:    PropTypes.string,
  price:   PropTypes.number,
};

Card.defaultProps = {
  picture: '',
  name:    '',
  price:   null,
};

export default Card;
