import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../common/theme';
import '../css/styles.css';

export default function EmptyLayout({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
