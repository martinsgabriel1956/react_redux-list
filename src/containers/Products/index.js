import React from 'react';
import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';

import { Container } from './styles.js';

export function Products(props) {
  const productList = useSelector(state => state.shop.products);
  return (
    <Container>
      {productList.map(prod => (
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