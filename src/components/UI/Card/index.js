import React from 'react';

import { Container } from './styles.js';

export function Card(props) {
  return (
    <Container style={props.style}>{props.children}</Container>
  );
};