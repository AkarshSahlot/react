// src/pages/Shop.js
import { Container } from '../styles';
import ProductCard from '../componenets/ProductCard';
const products = [
  { id: 1, name: 'Canvas 12x12', price: 10.99 },
  { id: 2, name: 'Canvas 16x20', price: 15.99 },
  // Add more products as needed
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
