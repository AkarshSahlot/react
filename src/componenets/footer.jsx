// src/components/Footer.js
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>Arts Academy &copy; 2024(Made by Akarsh sahlot)</p>
  </FooterContainer>
);

export default Footer;
