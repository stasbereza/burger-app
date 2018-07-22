// #Core
import React, { Component } from 'react';
// #Components
import ToppingsList from 'components/ToppingsList';

import toppingsDB from 'products';

export default class ToppingsListContainer extends Component {
  state = {
    toppings: [...toppingsDB.toppings],
  };

  render() {
    const { toppings } = this.state;
    console.log(this.state);
    return <ToppingsList toppings={toppings} />;
  }
}
