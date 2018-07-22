// #Core
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// #Components
import Container from 'components/Container';
import Header from 'components/Header';
import Home from 'components/Home';
import CreateBurgerForm from 'components/CreateBurgerForm';
import BurgerList from 'components/BurgerList';
// #Instruments
import v4 from 'uuid/v4';
// #shared
import PageNotFound from '../shared/PageNotFound';
// #pages
import BurgerListContainer from '../pages/BurgerListContainer';
import StuffingListContainer from '../pages/StuffingListContainer';
import ToppingsListContainer from '../pages/ToppingsListContainer';

import './styles.css';

export default class App extends Component {
  state = {
    burgers: [],
  };

  createBurger = ({ title, picture, size, stuffing }) => {
    const newBurger = {
      id: v4(),
      title,
      picture,
      size,
      stuffing,
    };

    if (newBurger.title === '') {
      alert('Please, fill out form fields!');
      return;
    }

    this.setState({
      burgers: [...this.state.burgers, newBurger],
    });
  };

  render() {
    const { burgers } = this.state;
    console.log('App state: ', this.state);

    return (
      <div className="App">
        <Container>
          <Header />
          {/* <CreateBurgerForm onFormSubmit={this.createBurger} /> */}
          {burgers.length > 0 ? (
            <BurgerList burgers={burgers} />
          ) : (
            <Link to="/burger-form" className="Message">Create your burger!</Link>
          )}
          <Switch>
            <Route exact path="/" render={props => <Home {...props} greeting="Welcome to Burger King!" />} />
            <Route path="/burger-form" render={props => <CreateBurgerForm {...props} onFormSubmit={this.createBurger} />} />
            <Route path="/burgers" component={BurgerListContainer} />
            <Route path="/stuffing" component={StuffingListContainer} />
            <Route path="/toppings" component={ToppingsListContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
      </div>
    );
  }
}
