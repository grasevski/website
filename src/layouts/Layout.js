import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import theme from '../common/theme';
import '../fonts/fonts.css';
import '../css/styles.css';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
