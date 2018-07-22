// #Core
import React from 'react';
import { NavLink } from 'react-router-dom';
// #Components
import Logo from 'components/Logo';

import './styles.css';

const menu = ['burgers', 'stuffing', 'toppings'];

const menuItems = menu.map(menuItem => (
  <li key={menuItem}>
    <NavLink
      to={`/${menuItem}`}
      className="NavLink__elem"
      activeClassName="active">
      {menuItem}
    </NavLink>
  </li>
));

const Navbar = () => (
  <nav>
    <div className="nav-wrapper orange darken-3">
      <Logo text="Burger King" cls="brand-logo" />
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {menuItems}
      </ul>
    </div>
  </nav>
);

export default Navbar;
