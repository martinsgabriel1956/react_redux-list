import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles.js';

export function Navigation(props) {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>All Products</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};