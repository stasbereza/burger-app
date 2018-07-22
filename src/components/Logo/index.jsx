// #Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = ({ text, cls }) => (
  <Link exact to="/" className={cls}>
    {text}
  </Link>
);

Logo.propTypes = {
  text: PropTypes.string.isRequired,
  cls: PropTypes.string,
};

Logo.defaultProps = {
  cls: '',
};

export default Logo;
