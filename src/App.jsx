// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles';
import Layout from './componenets/Layout';
import Home from './pages/home';
import Courses from './pages/Courses';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

const App = () => (
  <Router>
    <GlobalStyle />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
