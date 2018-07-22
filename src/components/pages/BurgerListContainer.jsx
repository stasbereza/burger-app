// #Core
import React, { Component } from 'react';
// #Components
import BurgerList from 'components/BurgerList';

import burgerDB from 'products';

export default class BurgerListContainer extends Component {
  state = {
    burgers: [...burgerDB.burgers],
  };

  render() {
    const { burgers } = this.state;
    console.log(this.state);
    return <BurgerList burgers={burgers} />;
  }
}
