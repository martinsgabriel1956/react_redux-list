import React, { useContext } from 'react';

import { Container } from './styles.js';

import ProductItem from '../components/Products/ProductItem';

import { ProductsContext } from '../../context/ProductsContext';

export function Products(props) {
  const productList = useContext(ProductsContext).products;
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