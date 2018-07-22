// #Core
import React, { Component } from 'react';
// #Components
import StuffingList from 'components/StuffingList';

import stuffingDB from 'products';

export default class StuffingListContainer extends Component {
  state = {
    stuffing: [...stuffingDB.stuffing],
  };

  render() {
    const { stuffing } = this.state;
    console.log(this.state);
    return <StuffingList stuffing={stuffing} />;
  }
}
