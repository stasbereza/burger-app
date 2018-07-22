// #Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// #Instruments
import ingredients from 'ingredients';
// #shared
import Input from '../shared/Input';
import Checkbox from '../shared/Checkbox';
import Button from '../shared/Button';

import './styles.css';

console.log(ingredients);

const INITIAL_STATE = {
  title: '',
  picture: 'https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg',
  size: '',
  stuffing: [],
};

const bun = ['small', 'large'];
const stuffing = [
  'marbled beef',
  'beef',
  'chicken fillet',
  'turkey cutlet',
  'duck fillet',
  'ostrich fillet',
  'gouda cheese',
  'cheddar cheese',
  'mozzarella cheese',
  'tomatoes',
  'pickled gherkins',
  'red onions',
  'sliced caramelized apple',
];

const toppings = [
  'BBQ sauce',
  'mayonnaise',
  'ketchup',
  'pesto sauce',
  'caesar sauce',
  'dorblu sauce',
  'berry sauce',
];
export default class CreateBurgerForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = { ...INITIAL_STATE };

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log('handleInputChange event: ', event);
    this.setState({ [name]: value });
  };

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const newBurger = {
      ...this.state,
      stuffing: Array.from(this.selectedCheckboxes),
    };

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }

    this.props.onFormSubmit(newBurger);

    this.setState({ ...INITIAL_STATE });
  };

  createCheckbox = label => (
    <Checkbox
      key={label}
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      handleInputChange={this.handleInputChange}
      cls="Checkbox"
    />
  );

  createCheckboxes = () => bun.map(this.createCheckbox);
  createCheckboxesStuffing = () => stuffing.map(this.createCheckbox);
  createCheckboxesToppings = () => toppings.map(this.createCheckbox);
  // createCheckboxes = () => Object.values(ingredients.bun).map(ingredient => this.createCheckbox(Object.values(ingredient).toString()));
  // createCheckboxesStuffing = () => Object.values(ingredients.stuffing).map(ingredient => Object.values(ingredient).map(x => Object.values(x).map(y => this.createCheckboxStuffing(Object.values(y)))));

  render() {
    const { title } = this.state;
    console.log('CreateBurgerForm state: ', this.state);

    return (
      <div className="row">
        <form action="#" onSubmit={this.handleSubmit} className="col s12">
          <Input name="title" value={title} onChange={this.handleInputChange} />
          <p>Select the bun:</p>
          {this.createCheckboxes()}
          <p>Select stuffing:</p>
          {this.createCheckboxesStuffing()}
          <p>Select toppings:</p>
          {this.createCheckboxesToppings()}
          <Button
            type="submit"
            text="Create burger"
            name="action"
            cls="btn waves-effect waves-light orange darken-3"
          />
        </form>
      </div>
    );
  }
}
