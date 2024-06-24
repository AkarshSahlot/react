// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const Navbar = () => (
  <NavbarContainer>
    <Link to="/">Home</Link>
    <Link to="/courses">Courses</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/contact">Contact</Link>
  </NavbarContainer>
);

export default Navbar;
