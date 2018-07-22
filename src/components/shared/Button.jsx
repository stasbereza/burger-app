// #Core
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, text, onClick, cls }) => (
  <button type={type} onClick={onClick} className={cls}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  cls: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  text: 'button',
  onClick: () => {},
  cls: '',
};

export default Button;
