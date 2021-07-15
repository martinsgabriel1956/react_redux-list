import React from 'react';

import Card from '../../UI/Card';
import { Container } from './styles.js';

export function FavoriteItem(props) {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Container className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Container>
    </Card>
  );
};