// #Core
import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({ title, picture, size, stuffing, toppings, desc, price }) => (
  <div className="col s12 m6 l4">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={picture} alt="burger" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a href="#">Read more...</a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {title}
          <i className="material-icons right">close</i>
        </span>
        <p>
          <span style={{ fontStyle: 'italic' }}>Bun: </span>
          {size}
        </p>
        <p style={{ fontStyle: 'italic' }}>Stuffing:</p>
        <ul>
          {stuffing.map(stuffingItem => (
            <li key={stuffingItem}>{stuffingItem}</li>
          ))}
        </ul>
        <p style={{ fontStyle: 'italic' }}>Toppings:</p>
        <ul>
          {toppings.map(toppingItem => (
            <li key={toppingItem}>{toppingItem}</li>
          ))}
        </ul>
        <p>{desc}</p>
        <p>
          <span style={{ fontStyle: 'italic' }}>Price: </span>
          {price} UAH
        </p>
      </div>
    </div>
  </div>
);

Burger.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  picture: PropTypes.string,
  stuffing: PropTypes.arrayOf(PropTypes.string),
  toppings: PropTypes.arrayOf(PropTypes.string),
  desc: PropTypes.string,
  price: PropTypes.number,
};

Burger.defaultProps = {
  title: '',
  picture: '',
  size: '',
  stuffing: [],
  toppings: [],
  desc: '',
  price: null,
};

export default Burger;
