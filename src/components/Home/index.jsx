// #Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// #shared
import Button from '../shared/Button';

import './styles.css';

const Home = ({ greeting }) => (
  <div className="Home">
    <h1 className="Home__greeting">{greeting}</h1>
    <div className="Home__buttons">
    <Link to="/burger-form">
      <Button text="Create burger" cls="btn waves-effect waves-light orange darken-3"/>
    </Link>
    <Link to="/burgers">
      <Button text="Choose burger" cls="btn waves-effect waves-light orange darken-3"/>
    </Link>
    </div>
  </div>
);

Home.propTypes = {
  greeting: PropTypes.string,
};

Home.defaultProps = {
  greeting: '',
};

export default Home;
