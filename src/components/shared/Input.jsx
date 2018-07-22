// #Core
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, value, onChange }) => (
  <div className="row">
    <div className="input-field col s6">
      <input
        id="input_text"
        className="Input"
        data-length="15"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor="input_text">Enter burger name</label>
    </div>
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  name: '',
};

export default Input;
