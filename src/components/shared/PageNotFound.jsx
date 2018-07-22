// #Core
import React from 'react';
import { Link } from 'react-router-dom';
// #Components
import Button from './Button';

const NotFound = () => (
  <div>
    <h1 style={{ fontSize: '32px', color: '#795548', textAlign: 'center' }}>
      Sorry, page not found
      <span role="img" aria-label="emoji">
        🤔
      </span>
    </h1>
      <Link exact to="/">
        <Button cls="btn waves-effect waves-light orange darken-3" text="return to home" />
      </Link>
  </div>
);

export default NotFound;
