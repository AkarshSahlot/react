// src/pages/Shop.js
import { Container } from '../styles';
import ProductCard from '../componenets/ProductCard';
const products = [
  { id: 1, name: 'Canvas 12x12', price: 10.99 },
  { id: 2, name: 'Canvas 16x20', price: 15.99 },
  { id: 3, name: 'Canvas 16x20', price: 15.99 },
  { id: 4, name: 'Canvas 16x20', price: 15.99 },
  { id: 5, name: 'Canvas 16x20', price: 15.99 },
  { id: 6, name: 'Canvas 16x20', price: 15.99 },
  { id: 7, name: 'Canvas 16x20', price: 15.99 },
  { id: 8, name: 'Canvas 16x20', price: 15.99 },
  { id: 9, name: 'Canvas 16x20', price: 15.99 },
  { id: 10, name: 'Canvas 16x20', price: 15.99 },
  { id: 11, name: 'Canvas 16x20', price: 15.99 },

  // Add more products as needed\
  ];

const Shop = () => (
  <Container>
    <h1>Shop</h1>
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </Container>
);

export default Shop;
