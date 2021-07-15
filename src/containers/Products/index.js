import React, { useContext } from 'react';

import { Container } from './styles.js';

import { useStore } from '../../hooks-store/store';

import ProductItem from '../components/Products/ProductItem';

export function Products(props) {
  const state = useStore()[0];
  return (
    <Container>
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </Container>
  );
};