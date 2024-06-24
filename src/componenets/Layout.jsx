// src/components/Layout.jsx
import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Footer from './footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Navbar />
    <Content>{children}</Content>
    <Footer />
  </LayoutContainer>
);

export default Layout;
