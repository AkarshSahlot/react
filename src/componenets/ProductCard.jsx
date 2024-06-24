// src/components/ProductCard.js
import React from 'react';
import { Card } from '../styles';

const ProductCard = ({ product }) => (
  <Card>
    <h2>{product.name}</h2>
    <p>${product.price}</p>
  </Card>
);

export default ProductCard;
