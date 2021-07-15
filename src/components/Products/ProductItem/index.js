import React from 'react';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card';

import { toggleFav } from '../../store/actions/products';

import { Container } from './styles.js';

export function ProductItem(props) {
  const dispatch = useDispatch();

  function handleToggleFav() {
    dispatch(toggleFav(props.id));
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Container className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={handleToggleFav}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </Container>
    </Card>
  );
};

