import React from 'react';

import { Container } from './styles.js';

export function Card({children}, ...props) {
  return (
    <Container style={props.style}>{children}</Container>
  );
};