// #Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends Component {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    cls: PropTypes.string,
    handleCheckboxChange: PropTypes.func,
    handleInputChange: PropTypes.func,
  };

  static defaultProps = {
    label: '',
    name: '',
    value: '',
    cls: '',
    handleCheckboxChange: () => null,
    handleInputChange: () => null,
  };

  state = {
    isChecked: false,
  };

  toggleCheckboxChange = event => {
    const { label, handleCheckboxChange, handleInputChange } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }));

    handleCheckboxChange(label);
    handleInputChange(event);
  };

  render() {
    const { label, name, value, cls } = this.props;
    const { isChecked } = this.state;
    console.log(
      'Checkbox props: ',
      label,
      name,
      value,
      'Checkbox state: ',
      isChecked,
    );

    return (
      <p className={cls}>
        <label htmlFor={label}>
          <input
            id={label}
            type="checkbox"
            className="filled-in"
            name={name}
            value={value}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          <span className="checkbox-label-brown">{label}</span>
        </label>
      </p>
    );
  }
}
